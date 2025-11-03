// Utilidades
const qs = (sel, ctx=document)=>ctx.querySelector(sel);
const qsa = (sel, ctx=document)=>Array.from(ctx.querySelectorAll(sel));
const fmtMoney = n => Number(n).toLocaleString('es-AR',{minimumFractionDigits:2, maximumFractionDigits:2});
const nowISO = ()=> new Date().toISOString().slice(0,16).replace('T',' ');

// Estado
const STORE_KEY = 'vinoteca_pedidos_v1';
let pedidos = [];
let sortKey = 'fecha';
let sortDir = 'desc';

// Cargar desde localStorage
function load(){
  const raw = localStorage.getItem(STORE_KEY);
  pedidos = raw ? JSON.parse(raw) : demoSeed();
}
function save(){
  localStorage.setItem(STORE_KEY, JSON.stringify(pedidos));
}
function demoSeed(){
  const demo = [
    {id:1, cliente:'Cliente Demo', producto:'Malbec Reserva', fecha:nowISO(), cantidad:2, precio:5500, total:11000, estado:'PENDIENTE'},
    {id:2, cliente:'Ana López', producto:'Cabernet Franc', fecha:nowISO(), cantidad:1, precio:7200, total:7200, estado:'CONFIRMADO'}
  ];
  localStorage.setItem(STORE_KEY, JSON.stringify(demo));
  return demo;
}

// Render
function render(){
  const tbody = qs('#tablaPedidos tbody');
  const term = qs('#search').value.trim().toLowerCase();
  let data = pedidos.filter(p => 
    p.cliente.toLowerCase().includes(term) || p.producto.toLowerCase().includes(term)
  );
  data.sort((a,b)=>{
    let va=a[sortKey], vb=b[sortKey];
    if(['cliente','producto','estado','fecha'].includes(sortKey)){
      va = String(va); vb = String(vb);
      return sortDir==='asc' ? va.localeCompare(vb) : vb.localeCompare(va);
    } else {
      return sortDir==='asc' ? Number(va)-Number(vb) : Number(vb)-Number(va);
    }
  });
  tbody.innerHTML = '';
  data.forEach(p=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.id}</td>
      <td>${p.cliente}</td>
      <td>${p.producto}</td>
      <td>${p.fecha}</td>
      <td>${p.cantidad}</td>
      <td>${fmtMoney(p.precio)}</td>
      <td>${fmtMoney(p.total)}</td>
      <td>${p.estado}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Eventos
function onSubmit(e){
  e.preventDefault();
  const fd = new FormData(e.target);
  const cliente = fd.get('cliente')?.trim();
  const producto = fd.get('producto')?.trim();
  const cantidad = Number(fd.get('cantidad'));
  const precio = Number(fd.get('precio'));
  const msg = qs('#msg');

  if(!cliente || !producto || !cantidad || !precio){
    msg.textContent = 'Completa todos los campos.';
    return;
  }
  const id = pedidos.length ? Math.max(...pedidos.map(p=>p.id))+1 : 1;
  const total = cantidad * precio;
  pedidos.unshift({ id, cliente, producto, fecha: nowISO(), cantidad, precio, total, estado:'PENDIENTE' });
  save();
  e.target.reset();
  msg.textContent = `Pedido #${id} registrado.`;
  render();
  setTimeout(()=>msg.textContent='', 2000);
}

function onSearch(){ render(); }
function onSort(e){
  const th = e.target.closest('th');
  if(!th) return;
  const key = th.dataset.sort;
  if(!key) return;
  if(sortKey===key){ sortDir = (sortDir==='asc'?'desc':'asc'); }
  else { sortKey = key; sortDir = 'asc'; }
  render();
}
function exportCSV(){
  const headers = ['ID','Cliente','Producto','Fecha','Cantidad','Precio','Total','Estado'];
  const rows = pedidos.map(p => [p.id,p.cliente,p.producto,p.fecha,p.cantidad,p.precio,p.total,p.estado]);
  const csv = [headers, ...rows].map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(',')).join('\n').trim();
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'pedidos.csv'; a.click();
  URL.revokeObjectURL(url);
}
function clearAll(){
  if(confirm('Esto borrará todos los pedidos locales. ¿Continuar?')){
    pedidos = [];
    save();
    render();
  }
}

// Init
function init(){
  load();
  render();
  qs('#pedidoForm').addEventListener('submit', onSubmit);
  qs('#search').addEventListener('input', onSearch);
  qsa('th[data-sort]').forEach(th => th.addEventListener('click', onSort));
  qs('#exportCsv').addEventListener('click', exportCSV);
  qs('#clearAll').addEventListener('click', clearAll);
}
document.addEventListener('DOMContentLoaded', init);
