!function(o){var t={};function a(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return o[s].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=o,a.c=t,a.d=function(o,t,s){a.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:s})},a.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},a.t=function(o,t){if(1&t&&(o=a(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var r in o)a.d(s,r,function(t){return o[t]}.bind(null,r));return s},a.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return a.d(t,"a",t),t},a.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},a.p="",a(a.s=0)}([function(o,t,a){const s=[a(1),a(2),a(3),a(4),a(5),a(6),a(7),a(8),a(9),a(10),a(11),a(12),a(13),a(14),a(15),a(16),a(17),a(18),a(19),a(20),a(21),a(22),a(23),a(24),a(25),a(26),a(27),a(28),a(29),a(30),a(31),a(32),a(33),a(34),a(35),a(36),a(37),a(38),a(39),a(40),a(41),a(42),a(43),a(44),a(45),a(46),a(47),a(48),a(49),a(50),a(51),a(52),a(53),a(54),a(55),a(56),a(57),a(58),a(59),a(60),a(61),a(62),a(63)],r=s.map(o=>o.data),e=s.map(o=>o.confirmados.recuperados||"0"),i=s.map(o=>o.confirmados.total||"0"),n=s.map(o=>o.confirmados.obitos||"0"),d=s.map(o=>o.confirmados.internados.total||"0"),c=s.map(o=>o.confirmados.internados.uti||"0"),u=(s.map(o=>o.suspeitos.obitos||"0"),s[s.length-1].confirmados.total),p=s[s.length-1].confirmados.obitos,l=s[s.length-1].suspeitos.obitos,m=(s.map(o=>o.fonte),s.reduce((o,t,a)=>{const r=t.confirmados.internados.total||0;let e=0;a>0&&(e=s[a-1].confirmados.internados.total||0);let i=r-e;return i<0&&(i=0),i+o},0));document.querySelector(".internados-js").innerHTML=m;const b=s.reduce((o,t,a)=>{const r=t.suspeitos.internados.total||0;let e=0;a>0&&(e=s[a-1].suspeitos.internados.total||0);let i=r-e;return i<0&&(i=0),i+o},0);document.querySelector(".internadosuspeitos-js").innerHTML=b;const f=s.reduce((o,t,a)=>{const r=t.confirmados.internados.uti||0;let e=0;a>0&&(e=s[a-1].confirmados.internados.uti||0);let i=r-e;return i<0&&(i=0),i+o},0);document.querySelector(".confirmadosuti-js").innerHTML=f;const g=s.reduce((o,t,a)=>{const r=t.suspeitos.internados.uti||0;let e=0;a>0&&(e=s[a-1].suspeitos.internados.uti||0);let i=r-e;return i<0&&(i=0),i+o},0);document.querySelector(".suspeitosuti-js").innerHTML=g;const v=s.reduce((o,t,a)=>{const r=t.suspeitos.aguardamResultado||0;let e=0;a>0&&(e=s[a-1].suspeitos.aguardamResultado||0);let i=r-e;return i<0&&(i=0),i+o},0);document.querySelector(".aguardamresultados-js").innerHTML=v;const w=document.querySelector("#total-de-casos-confirmados").getContext("2d"),h=document.querySelector("#total-de-obitos").getContext("2d"),S=document.querySelector("#total-de-casos-recuperados").getContext("2d"),x=document.querySelector("#total-de-casos-internados").getContext("2d"),J=document.querySelector("#combinacao-obitos-suspeitos-confirmados-e-totais").getContext("2d");new Chart(w,{type:"line",data:{labels:r,datasets:[{label:"Número total de casos (Confirmados)",borderColor:"#ff6600",data:i}]},options:{}}),new Chart(h,{type:"line",data:{labels:r,datasets:[{label:"Número total de óbitos (Confirmados)",borderColor:"#d61313",data:n}]},options:{}}),new Chart(S,{type:"line",data:{labels:r,datasets:[{label:"Recuperados (Confirmados)",borderColor:"#063302",data:e},{label:"Casos Confirmados",borderColor:"#ff6600",data:i}]},options:{}}),new Chart(x,{type:"line",data:{labels:r,datasets:[{label:"Internados (Confirmados)",borderColor:"#030a5c",data:d},{label:"Internados em UTI (Confirmados)",borderColor:"#2f8763",data:c},{label:"Obitos (Confirmados)",borderColor:"#d61313",data:n},{label:"Recuperados (Confirmados)",borderColor:"#063302",data:e}]},options:{}}),new Chart(J,{type:"bar",data:{datasets:[{label:"Total de Casos confirmados",backgroundColor:"#ff6600",data:[u]},{label:"Óbitos (Confirmados)",backgroundColor:"#d61313",data:[p]},{label:"Óbitos (Suspeitos)",backgroundColor:"#058ba6",data:[l]}]},options:{}})},function(o){o.exports=JSON.parse('{"data":"18-03-2020","fonte":"https://www.instagram.com/p/B95BeNFHovb/","confirmados":{"obitos":0,"recuperados":0,"internados":{"uti":0,"total":0}},"suspeitos":{"obitos":0,"descartados":10,"aguardamResultado":62,"internados":{"uti":0,"total":0}}}')},function(o){o.exports=JSON.parse('{"data":"19-03-2020","fonte":"https://www.instagram.com/p/B97iy5kJHk6/","confirmados":{"obitos":0,"recuperados":0,"internados":{"uti":0,"total":0}},"suspeitos":{"obitos":0,"descartados":13,"aguardamResultado":67,"internados":{"uti":0,"total":0}}}')},function(o){o.exports=JSON.parse('{"data":"20-03-2020","fonte":"https://www.instagram.com/p/B9-MHxmpGeS/","confirmados":{"obitos":0,"recuperados":0,"internados":{"uti":0,"total":0}},"suspeitos":{"obitos":0,"descartados":13,"aguardamResultado":78,"internados":{"uti":0,"total":0}}}')},function(o){o.exports=JSON.parse('{"data":"21-03-2020","fonte":"https://www.instagram.com/p/B-AetLgl9QX/","confirmados":{"obitos":0,"recuperados":0,"internados":{"uti":0,"total":0}},"suspeitos":{"obitos":0,"descartados":13,"aguardamResultado":84,"internados":{"uti":0,"total":0}}}')},function(o){o.exports=JSON.parse('{"data":"22-03-2020","fonte":"https://www.instagram.com/p/B-C1u3ipzMM/","confirmados":{"obitos":0,"recuperados":0,"internados":{"uti":0,"total":0}},"suspeitos":{"obitos":0,"descartados":13,"aguardamResultado":98,"internados":{"uti":0,"total":0}}}')},function(o){o.exports=JSON.parse('{"data":"23-03-2020","fonte":"https://www.instagram.com/p/B-F0Rf7AiCE/","confirmados":{"obitos":0,"recuperados":0,"internados":{"uti":0,"total":0}},"suspeitos":{"obitos":2,"descartados":14,"aguardamResultado":103,"internados":{"uti":0,"total":15}}}')},function(o){o.exports=JSON.parse('{"data":"24-03-2020","fonte":"https://www.instagram.com/p/B-IYqAnJdW0/","confirmados":{"total":1,"obitos":0,"recuperados":0,"internados":{"uti":0,"total":0}},"suspeitos":{"obitos":2,"descartados":17,"aguardamResultado":124,"internados":{"uti":0,"total":17}}}')},function(o){o.exports=JSON.parse('{"data":"25-03-2020","fonte":"https://www.instagram.com/p/B-K9Kd_Juw1/","confirmados":{"total":1,"obitos":0,"recuperados":0,"internados":{"uti":0,"total":0}},"suspeitos":{"obitos":3,"descartados":17,"aguardamResultado":168,"internados":{"uti":0,"total":20}}}')},function(o){o.exports=JSON.parse('{"data":"26-03-2020","fonte":"http://noticias.sorocaba.sp.gov.br/segundo-caso-do-novo-coronavirus-e-confirmado-em-sorocaba/","confirmados":{"total":2,"obitos":0,"recuperados":0,"internados":{"uti":0,"total":0}},"suspeitos":{"obitos":4,"descartados":18,"aguardamResultado":195,"internados":{"uti":0,"total":28}}}')},function(o){o.exports=JSON.parse('{"data":"27-03-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-registra-terceiro-confirmado-do-novo-coronavirus/","confirmados":{"total":3,"obitos":0,"recuperados":0,"internados":{"uti":0,"total":0}},"suspeitos":{"obitos":4,"descartados":28,"aguardamResultado":199,"internados":{"uti":0,"total":33}}}')},function(o){o.exports=JSON.parse('{"data":"28-03-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-tem-primeira-morte-confirmada-pelo-novo-coronavirus/","confirmados":{"total":3,"obitos":1,"recuperados":0,"internados":{"uti":0,"total":0}},"suspeitos":{"obitos":4,"descartados":30,"aguardamResultado":222,"internados":{"uti":11,"total":42}}}')},function(o){o.exports=JSON.parse('{"data":"29-03-2020","fonte":"https://www.instagram.com/p/B-UwmQIJ0wt/","confirmados":{"total":3,"obitos":1,"recuperados":0,"internados":{"uti":0,"total":0}},"suspeitos":{"obitos":5,"descartados":30,"aguardamResultado":227,"internados":{"uti":12,"total":47}}}')},function(o){o.exports=JSON.parse('{"data":"30-03-2020","fonte":"http://noticias.sorocaba.sp.gov.br/chega-a-seis-numero-de-obitos-suspeitos-da-covid-19-em-sorocaba/","confirmados":{"total":3,"obitos":1,"recuperados":0,"internados":{"uti":0,"total":0}},"suspeitos":{"obitos":6,"descartados":31,"aguardamResultado":244,"internados":{"uti":15,"total":51}}}')},function(o){o.exports=JSON.parse('{"data":"31-03-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sobe-para-11-o-numero-de-casos-confirmados-do-novo-coronavirus-em-sorocaba/","confirmados":{"total":11,"obitos":1,"recuperados":0,"internados":{"uti":0,"total":8}},"suspeitos":{"obitos":8,"descartados":42,"aguardamResultado":246,"internados":{"uti":15,"total":51}}}')},function(o){o.exports=JSON.parse('{"data":"01-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-registra-14-casos-confirmados-da-covid-19-e-uma-morte/","confirmados":{"total":14,"obitos":2,"recuperados":2,"internados":{"uti":0,"total":8}},"suspeitos":{"obitos":9,"descartados":44,"aguardamResultado":276,"internados":{"uti":15,"total":53}}}')},function(o){o.exports=JSON.parse('{"data":"02-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-contabiliza-16-casos-confirmados-do-novo-coronavirus/","confirmados":{"total":16,"obitos":2,"recuperados":6,"internados":{"uti":0,"total":8}},"suspeitos":{"obitos":10,"descartados":50,"aguardamResultado":277,"internados":{"uti":15,"total":44}}}')},function(o){o.exports=JSON.parse('{"data":"03-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sobe-para-20-o-numero-de-casos-confirmados-do-novo-coronavirus-em-sorocaba/","confirmados":{"total":20,"obitos":3,"recuperados":8,"internados":{"uti":0,"total":9}},"suspeitos":{"obitos":13,"descartados":54,"aguardamResultado":292,"internados":{"uti":10,"total":44}}}')},function(o){o.exports=JSON.parse('{"data":"04-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-registra-22-casos-confirmados-da-covid-19/","confirmados":{"total":22,"obitos":3,"recuperados":10,"internados":{"uti":0,"total":9}},"suspeitos":{"obitos":12,"descartados":55,"aguardamResultado":312,"internados":{"uti":12,"total":46}}}')},function(o){o.exports=JSON.parse('{"data":"05-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-contabiliza-mais-um-novo-caso-confirmado-da-covid-19-e-o-total-chega-a-23/","confirmados":{"total":23,"obitos":3,"recuperados":11,"internados":{"uti":0,"total":9}},"suspeitos":{"obitos":14,"descartados":55,"aguardamResultado":330,"internados":{"uti":12,"total":59}}}')},function(o){o.exports=JSON.parse('{"data":"06-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-totaliza-25-casos-confirmados-do-novo-coronavirus/","confirmados":{"total":25,"obitos":3,"recuperados":17,"internados":{"uti":0,"total":5}},"suspeitos":{"obitos":16,"descartados":62,"aguardamResultado":336,"internados":{"uti":12,"total":40}}}')},function(o){o.exports=JSON.parse('{"data":"07-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-tem-mais-um-caso-confirmado-da-covid-19-ja-sao-26/","confirmados":{"total":26,"obitos":3,"recuperados":18,"internados":{"uti":0,"total":5}},"suspeitos":{"obitos":18,"descartados":73,"aguardamResultado":344,"internados":{"uti":10,"total":50}}}')},function(o){o.exports=JSON.parse('{"data":"08-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-confirma-mais-cinco-novos-casos-da-covid-19-e-total-chega-a-31/","confirmados":{"total":31,"obitos":3,"recuperados":22,"internados":{"uti":0,"total":6}},"suspeitos":{"obitos":17,"descartados":82,"aguardamResultado":348,"internados":{"uti":12,"total":49}}}')},function(o){o.exports=JSON.parse('{"data":"09-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-tem-mais-um-novo-caso-confirmado-da-covid-19-total-chega-a-32/","confirmados":{"total":32,"obitos":3,"recuperados":22,"internados":{"uti":0,"total":7}},"suspeitos":{"obitos":17,"descartados":92,"aguardamResultado":345,"internados":{"uti":15,"total":53}}}')},function(o){o.exports=JSON.parse('{"data":"10-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-mantem-numero-de-casos-confirmados-do-novo-coronavirus-em-32-nesta-sexta-feira/","confirmados":{"total":32,"obitos":3,"recuperados":22,"internados":{"uti":0,"total":7}},"suspeitos":{"obitos":19,"descartados":92,"aguardamResultado":361,"internados":{"uti":17,"total":58}}}')},function(o){o.exports=JSON.parse('{"data":"11-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/numero-de-casos-confirmados-da-covid-19-chega-a-35-em-sorocaba/","confirmados":{"total":35,"obitos":3,"recuperados":25,"internados":{"uti":0,"total":7}},"suspeitos":{"obitos":15,"descartados":115,"aguardamResultado":345,"internados":{"uti":17,"total":58}}}')},function(o){o.exports=JSON.parse('{"data":"12-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/mais-um-novo-caso-da-covid-19-e-confirmado-neste-domingo-total-chega-a-36/","confirmados":{"total":36,"obitos":3,"recuperados":26,"internados":{"uti":0,"total":7}},"suspeitos":{"obitos":15,"descartados":131,"aguardamResultado":336,"internados":{"uti":17,"total":64}}}')},function(o){o.exports=JSON.parse('{"data":"13-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-registra-a-quarta-morte-pelo-novo-coronavirus/","confirmados":{"total":39,"obitos":4,"recuperados":29,"internados":{"uti":0,"total":6}},"suspeitos":{"obitos":14,"descartados":137,"aguardamResultado":329,"internados":{"uti":14,"total":59}}}')},function(o){o.exports=JSON.parse('{"data":"14-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/quinta-morte-e-confirmada-com-o-novo-coronavirus-em-sorocaba/","confirmados":{"total":42,"obitos":5,"recuperados":31,"internados":{"uti":0,"total":6}},"suspeitos":{"obitos":13,"descartados":145,"aguardamResultado":339,"internados":{"uti":12,"total":46}}}')},function(o){o.exports=JSON.parse('{"data":"15-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-confirma-mais-dois-obitos-com-a-covid-19-total-chega-a-7/","confirmados":{"total":52,"obitos":7,"recuperados":36,"internados":{"uti":0,"total":9}},"suspeitos":{"obitos":10,"descartados":191,"aguardamResultado":303,"internados":{"uti":7,"total":39}}}')},function(o){o.exports=JSON.parse('{"data":"16-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/oitavo-obito-e-confirmado-com-a-covid-19-em-sorocaba/","confirmados":{"total":58,"obitos":8,"recuperados":38,"internados":{"uti":0,"total":12}},"suspeitos":{"obitos":11,"descartados":210,"aguardamResultado":295,"internados":{"uti":5,"total":34}}}')},function(o){o.exports=JSON.parse('{"data":"17-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-soma-10-obitos-confirmados-com-a-covid-19/","confirmados":{"total":60,"obitos":10,"recuperados":38,"internados":{"uti":0,"total":12}},"suspeitos":{"obitos":9,"descartados":241,"aguardamResultado":278,"internados":{"uti":4,"total":36}}}')},function(o){o.exports=JSON.parse('{"data":"18-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-ja-soma-11-obitos-confirmados-com-a-covid-19/","confirmados":{"total":62,"obitos":11,"recuperados":40,"internados":{"uti":0,"total":11}},"suspeitos":{"obitos":7,"descartados":271,"aguardamResultado":251,"internados":{"uti":1,"total":32}}}')},function(o){o.exports=JSON.parse('{"data":"19-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/obitos-confirmados-com-a-covid-19-chega-a-12-em-sorocaba/","confirmados":{"total":65,"obitos":12,"recuperados":42,"internados":{"uti":0,"total":11}},"suspeitos":{"obitos":5,"descartados":323,"aguardamResultado":216,"internados":{"uti":6,"total":50}}}')},function(o){o.exports=JSON.parse('{"data":"20-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/novo-obito-e-registrado-com-a-covid-19-em-sorocaba-total-vai-a-13/","confirmados":{"total":71,"obitos":13,"recuperados":44,"internados":{"uti":0,"total":14}},"suspeitos":{"obitos":7,"descartados":353,"aguardamResultado":197,"internados":{"uti":6,"total":48}}}')},function(o){o.exports=JSON.parse('{"data":"21-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-mantem-numero-de-casos-confirmados-do-novo-coronavirus-em-71-nesta-terca-feira/","confirmados":{"total":71,"obitos":13,"recuperados":44,"internados":{"uti":0,"total":14}},"suspeitos":{"obitos":7,"descartados":355,"aguardamResultado":206,"internados":{"uti":7,"total":54}}}')},function(o){o.exports=JSON.parse('{"data":"22-04-2020","fonte":"https://www.instagram.com/p/B_TE8lyhEVj/","confirmados":{"total":73,"obitos":13,"recuperados":47,"internados":{"uti":0,"total":13}},"suspeitos":{"obitos":9,"descartados":428,"aguardamResultado":147,"internados":{"uti":7,"total":36}}}')},function(o){o.exports=JSON.parse('{"data":"23-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sobe-para-16-o-numero-de-mortes-confirmadas-com-a-covid-19-em-sorocaba/","confirmados":{"total":79,"obitos":16,"recuperados":53,"internados":{"uti":0,"total":10}},"suspeitos":{"obitos":5,"descartados":461,"aguardamResultado":120,"internados":{"uti":8,"total":31}}}')},function(o){o.exports=JSON.parse('{"data":"24-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-registra-total-de-18-mortes-pela-covid-19/","confirmados":{"total":93,"obitos":18,"recuperados":59,"internados":{"uti":0,"total":16}},"suspeitos":{"obitos":5,"descartados":483,"aguardamResultado":80,"internados":{"uti":7,"total":28}}}')},function(o){o.exports=JSON.parse('{"data":"25-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-registra-99-casos-confirmados-do-novo-coronavirus/","confirmados":{"total":99,"obitos":18,"recuperados":65,"internados":{"uti":0,"total":16}},"suspeitos":{"obitos":5,"descartados":491,"aguardamResultado":87,"internados":{"uti":10,"total":33}}}')},function(o){o.exports=JSON.parse('{"data":"26-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/casos-confirmados-do-novo-coronavirus-chega-a-104-em-sorocaba/","confirmados":{"total":104,"obitos":18,"recuperados":70,"internados":{"uti":0,"total":16}},"suspeitos":{"obitos":5,"descartados":516,"aguardamResultado":77,"internados":{"uti":12,"total":45}}}')},function(o){o.exports=JSON.parse('{"data":"27-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-registra-mais-tres-novos-obitos-pela-covid-19-total-vai-a-21/","confirmados":{"total":118,"obitos":21,"recuperados":79,"internados":{"uti":7,"total":18}},"suspeitos":{"obitos":4,"descartados":525,"aguardamResultado":116,"internados":{"uti":14,"total":45}}}')},function(o){o.exports=JSON.parse('{"data":"28-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-totaliza-137-casos-confirmados-do-novo-coronavirus/","confirmados":{"total":137,"obitos":21,"recuperados":79,"internados":{"uti":7,"total":18}},"suspeitos":{"obitos":4,"descartados":543,"aguardamResultado":103,"internados":{"uti":13,"total":35}}}')},function(o){o.exports=JSON.parse('{"data":"29-04-2020","fonte":"https://www.instagram.com/p/B_lEcYMpdXo/","confirmados":{"total":142,"obitos":21,"recuperados":107,"internados":{"uti":8,"total":14}},"suspeitos":{"obitos":5,"descartados":566,"aguardamResultado":109,"internados":{"uti":9,"total":27}}}')},function(o){o.exports=JSON.parse('{"data":"30-04-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-registra-154-casos-confirmados-do-novo-coronavirus/","confirmados":{"total":154,"obitos":21,"recuperados":119,"internados":{"uti":8,"total":14}},"suspeitos":{"obitos":4,"descartados":577,"aguardamResultado":112,"internados":{"uti":7,"total":27}}}')},function(o){o.exports=JSON.parse('{"data":"01-05-2020","fonte":"https://www.instagram.com/p/B_p5lYLpzLf/","confirmados":{"total":158,"obitos":21,"recuperados":124,"internados":{"uti":8,"total":13}},"suspeitos":{"obitos":4,"descartados":595,"aguardamResultado":120,"internados":{"uti":9,"total":39}}}')},function(o){o.exports=JSON.parse('{"data":"02-05-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-totaliza-23-obitos-confirmados-com-o-novo-coronavirus/","confirmados":{"total":158,"obitos":23,"recuperados":124,"internados":{"uti":6,"total":11}},"suspeitos":{"obitos":3,"descartados":597,"aguardamResultado":128,"internados":{"uti":9,"total":43}}}')},function(o){o.exports=JSON.parse('{"data":"03-05-2020","fonte":"https://www.instagram.com/p/B_vDdx3JR5S/","confirmados":{"total":159,"obitos":23,"recuperados":125,"internados":{"uti":6,"total":11}},"suspeitos":{"obitos":3,"descartados":615,"aguardamResultado":121,"internados":{"uti":8,"total":47}}}')},function(o){o.exports=JSON.parse('{"data":"04-05-2020","fonte":"http://noticias.sorocaba.sp.gov.br/sorocaba-mantem-numero-de-casos-confirmados-do-novo-coronavirus-em-159-nesta-segunda-feira/","confirmados":{"total":159,"obitos":23,"recuperados":124,"internados":{"uti":7,"total":12}},"suspeitos":{"obitos":7,"descartados":640,"aguardamResultado":145,"internados":{"uti":7,"total":48}}}')},function(o){o.exports=JSON.parse('{"data":"05-05-2020","fonte":"https://www.instagram.com/p/B_0k6e9p50J/","confirmados":{"total":172,"obitos":23,"recuperados":138,"internados":{"uti":6,"total":11}},"suspeitos":{"obitos":8,"descartados":670,"aguardamResultado":132,"internados":{"uti":11,"total":33}}}')},function(o){o.exports=JSON.parse('{"data":"06-05-2020","fonte":"https://www.instagram.com/p/B_3FWcBpB-M/","confirmados":{"total":188,"obitos":23,"recuperados":149,"internados":{"uti":8,"total":16}},"suspeitos":{"obitos":5,"descartados":711,"aguardamResultado":110,"internados":{"uti":9,"total":26}}}')},function(o){o.exports=JSON.parse('{"data":"07-05-2020","fonte":"https://www.instagram.com/p/B_5uCPLHKNZ/","confirmados":{"total":208,"obitos":24,"recuperados":169,"internados":{"uti":8,"total":15}},"suspeitos":{"obitos":3,"descartados":742,"aguardamResultado":126,"internados":{"uti":6,"total":28}}}')},function(o){o.exports=JSON.parse('{"data":"08-05-2020","fonte":"https://www.instagram.com/p/B_8SNLTD8LC/","confirmados":{"total":248,"obitos":25,"recuperados":208,"internados":{"uti":9,"total":15}},"suspeitos":{"obitos":3,"descartados":768,"aguardamResultado":125,"internados":{"uti":6,"total":28}}}')},function(o){o.exports=JSON.parse('{"data":"09-05-2020","fonte":"https://www.instagram.com/p/B_-hue6JLla/","confirmados":{"total":248,"obitos":26,"recuperados":202,"internados":{"uti":9,"total":20}},"suspeitos":{"obitos":3,"descartados":781,"aguardamResultado":149,"internados":{"uti":9,"total":39}}}')},function(o){o.exports=JSON.parse('{"data":"10-05-2020","fonte":"https://www.instagram.com/p/CABERuNhhWR/","confirmados":{"total":266,"obitos":28,"recuperados":217,"internados":{"uti":10,"total":21}},"suspeitos":{"obitos":3,"descartados":793,"aguardamResultado":147,"internados":{"uti":10,"total":45}}}')},function(o){o.exports=JSON.parse('{"data":"11-05-2020","fonte":"https://www.instagram.com/p/CAD8ClAAxBy/","confirmados":{"total":268,"obitos":28,"recuperados":221,"internados":{"uti":9,"total":19}},"suspeitos":{"obitos":3,"descartados":829,"aguardamResultado":163,"internados":{"uti":11,"total":46}}}')},function(o){o.exports=JSON.parse('{"data":"12-05-2020","fonte":"https://www.instagram.com/p/CAGkDk0D7_w/","confirmados":{"total":307,"obitos":28,"recuperados":260,"internados":{"uti":7,"total":19}},"suspeitos":{"obitos":5,"descartados":888,"aguardamResultado":153,"internados":{"uti":11,"total":40}}}')},function(o){o.exports=JSON.parse('{"data":"13-05-2020","fonte":"https://www.instagram.com/p/CAJCBosAavy/","confirmados":{"total":333,"obitos":29,"recuperados":285,"internados":{"uti":7,"total":19}},"suspeitos":{"obitos":5,"descartados":970,"aguardamResultado":138,"internados":{"uti":12,"total":45}}}')},function(o){o.exports=JSON.parse('{"data":"14-05-2020","fonte":"https://www.instagram.com/p/CALsnP_HZAK/","confirmados":{"total":362,"obitos":29,"recuperados":310,"internados":{"uti":9,"total":23}},"suspeitos":{"obitos":5,"descartados":999,"aguardamResultado":159,"internados":{"uti":14,"total":56}}}')},function(o){o.exports=JSON.parse('{"data":"15-05-2020","fonte":"https://www.instagram.com/p/CAON5bggUIQ/","confirmados":{"total":381,"obitos":29,"recuperados":328,"internados":{"uti":10,"total":24}},"suspeitos":{"obitos":4,"descartados":1054,"aguardamResultado":186,"internados":{"uti":14,"total":69}}}')},function(o){o.exports=JSON.parse('{"data":"16-05-2020","fonte":"https://www.instagram.com/p/CAQgxmNgkRZ/","confirmados":{"total":398,"obitos":29,"recuperados":341,"internados":{"uti":10,"total":28}},"suspeitos":{"obitos":4,"descartados":1086,"aguardamResultado":177,"internados":{"uti":18,"total":72}}}')},function(o){o.exports=JSON.parse('{"data":"17-05-2020","fonte":"https://www.instagram.com/p/CATLQTlBjJK/","confirmados":{"total":423,"obitos":29,"recuperados":357,"internados":{"uti":14,"total":37}},"suspeitos":{"obitos":4,"descartados":1125,"aguardamResultado":150,"internados":{"uti":15,"total":60}}}')},function(o){o.exports=JSON.parse('{"data":"18-05-2020","fonte":"https://www.instagram.com/p/CAWA_ZLF_g3/","confirmados":{"total":429,"obitos":29,"recuperados":370,"internados":{"uti":17,"total":30}},"suspeitos":{"obitos":6,"descartados":1141,"aguardamResultado":179,"internados":{"uti":13,"total":67}}}')},function(o){o.exports=JSON.parse('{"data":"19-05-2020","fonte":"https://www.instagram.com/p/CAYoiY2JR2m/","confirmados":{"total":486,"obitos":30,"recuperados":428,"internados":{"uti":16,"total":28}},"suspeitos":{"obitos":5,"descartados":1221,"aguardamResultado":150,"internados":{"uti":13,"total":54}}}')}]);