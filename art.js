/* ANIMED art: original placeholder characters drawn in SVG (flat colour, ink outline, hard shade shapes).
   Replace any of them with your own AI art by dropping PNG files into /assets (see README):
     assets/hero-f.png  assets/hero-m.png  assets/pulse.png  assets/npc-<characterKey>.png
   If a PNG exists it is shown automatically; otherwise the drawing below is used. */
window.Art=(function(){
  var INK='#0A0A22', SK='#F6D6C8', SK2='#D9A9A0', SC='#9C1E3C', SC2='#5E1026', GOLD='#FFD36B', TRIM='#C9D8FF';

  function cloakAndScarf(){
    return ''
    +'<path d="M4 240C8 196 44 172 100 172s92 24 96 68z" fill="#171539" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'<path d="M4 240C8 196 44 172 100 172 78 192 60 214 54 240z" fill="#0D0B26"/>'
    +'<path d="M24 216C64 192 136 192 176 216" fill="none" stroke="'+TRIM+'" stroke-width="2"/>'
    +'<path d="M86 136h28v40q-14 10-28 0z" fill="'+SK2+'" stroke="'+INK+'" stroke-width="2.5"/>'
    /* long scarf tail first, so the wrap sits on top */
    +'<path d="M116 190C142 194 162 216 156 240h-30c6-18-2-30-20-38z" fill="'+SC+'" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'<path d="M126 240c4-14 0-24-8-30 10 4 22 14 18 30z" fill="'+SC2+'" opacity=".6"/>'
    +'<path d="M127 236h28" stroke="'+TRIM+'" stroke-width="3.5" stroke-linecap="round"/>'
    +'<path d="M56 164C78 186 122 186 144 164L152 186C124 210 76 210 48 186z" fill="'+SC+'" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'<path d="M56 164C78 186 122 186 144 164L148 176C122 198 78 198 52 176z" fill="'+SC2+'" opacity=".55"/>'
    +'<path d="M62 176c24 14 52 14 76 0" fill="none" stroke="'+TRIM+'" stroke-width="2" stroke-dasharray="5 4" opacity=".9"/>';
  }
  function eye(cx,cy,rx,ry,iris,irisLo){
    return '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+(rx+2.5)+'" ry="'+(ry+2.5)+'" fill="#fff" stroke="'+INK+'" stroke-width="2"/>'
      +'<ellipse cx="'+cx+'" cy="'+(cy+1)+'" rx="'+rx+'" ry="'+ry+'" fill="'+iris+'"/>'
      +'<path d="M'+(cx-rx)+' '+(cy+2)+'a'+rx+' '+ry+' 0 0 0 '+(2*rx)+' 0z" fill="'+irisLo+'"/>'
      +'<ellipse cx="'+cx+'" cy="'+(cy+1)+'" rx="'+(rx*0.42)+'" ry="'+(ry*0.55)+'" fill="'+INK+'"/>'
      +'<circle cx="'+(cx-rx*0.38)+'" cy="'+(cy-ry*0.4)+'" r="'+(rx*0.3)+'" fill="#fff"/>'
      +'<circle cx="'+(cx+rx*0.4)+'" cy="'+(cy+ry*0.45)+'" r="'+(rx*0.16)+'" fill="#fff"/>';
  }

  function heroF(){
    var H1='#7B84B8',H2='#4F5688',H3='#A4ADD8',HL='#EEF2FF';
    return '<svg viewBox="0 0 200 240" role="img" aria-label="Descender, female">'
    /* long back hair */
    +'<path d="M36 120C26 60 62 14 100 14s74 46 64 106c-2 40 8 80 20 118H16c12-38 22-78 20-118z" fill="'+H1+'" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'<path d="M150 40C172 76 176 130 166 170c6 24 12 46 18 68h-26c8-40 4-110-8-198z" fill="'+H2+'" opacity=".75"/>'
    + cloakAndScarf()
    /* long locks falling over the shoulders, in front of the coat */
    +'<path d="M54 120c-12 40-8 84 8 116-22-4-34-12-40-22 12-26 20-58 14-96z" fill="'+H1+'" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'<path d="M146 120c12 40 8 84-8 116 22-4 34-12 40-22-12-26-20-58-14-96z" fill="'+H1+'" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'<path d="M50 160c-2 28 2 52 10 70M150 160c2 28-2 52-10 70" fill="none" stroke="'+H3+'" stroke-width="2.5" stroke-linecap="round" opacity=".8"/>'
    /* face: softer, narrower jaw */
    +'<path d="M66 96C66 132 82 152 100 152s34-20 34-56C134 60 66 60 66 96z" fill="'+SK+'" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'<path d="M120 76c12 10 14 36 4 56-6 10-12 16-20 18 16-14 20-42 16-74z" fill="'+SK2+'" opacity=".7"/>'
    + eye(84,108,8,10.5,'#9A7CFF','#5B3FD0') + eye(116,108,8,10.5,'#9A7CFF','#5B3FD0')
    /* lashes and winged liner */
    +'<path d="M72 100c4-7 10-9 19-7M128 100c-4-7-10-9-19-7M70 104l-5-3M130 104l5-3" fill="none" stroke="'+INK+'" stroke-width="3.6" stroke-linecap="round"/>'
    +'<path d="M73 88c6-5 14-6 20-3M127 88c-6-5-14-6-20-3" fill="none" stroke="'+H2+'" stroke-width="2.8" stroke-linecap="round"/>'
    +'<path d="M100 117v7l-2 1" fill="none" stroke="'+SK2+'" stroke-width="2" stroke-linecap="round"/>'
    +'<path d="M93 136q7 4 14 0" fill="none" stroke="#B0425C" stroke-width="3" stroke-linecap="round"/>'
    +'<ellipse cx="76" cy="124" rx="6" ry="3" fill="#E58FA0" opacity=".28"/><ellipse cx="124" cy="124" rx="6" ry="3" fill="#E58FA0" opacity=".28"/>'
    /* swept bangs */
    +'<path d="M62 106C54 52 82 28 102 28s44 22 38 78c-2-22-8-36-20-46-6 14-22 14-28-2-14 10-24 26-30 48z" fill="'+H3+'" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'<path d="M62 104c-4 30 0 52 8 68-10-16-14-40-8-68z" fill="'+H3+'" stroke="'+INK+'" stroke-width="2.5"/>'
    +'<path d="M138 104c4 30 0 52-8 68 10-16 14-40 8-68z" fill="'+H3+'" stroke="'+INK+'" stroke-width="2.5"/>'
    +'<path d="M78 44c12-8 32-8 46 0" fill="none" stroke="'+HL+'" stroke-width="3.5" stroke-linecap="round" opacity=".9"/>'
    +'<g transform="translate(138 48)"><path d="M-5-8h10l3 5v10l-3 5h-10l-3-5v-10z" fill="'+TRIM+'" stroke="'+INK+'" stroke-width="2.2" stroke-linejoin="round"/><path d="M-3-3h6v8h-6z" fill="#EBD9FF"/></g>'
    +'</svg>';
  }

  function heroM(){
    return '<svg viewBox="0 0 200 240" role="img" aria-label="Descender, male">'
    +'<path d="M54 110C46 56 74 22 100 22s54 34 46 88z" fill="#6D74A8" stroke="'+INK+'" stroke-width="3"/>'
    + cloakAndScarf()
    +'<path d="M62 94C62 132 76 152 100 152s38-20 38-58C138 58 62 58 62 94z" fill="'+SK+'" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'<path d="M122 72c14 12 16 42 4 62-6 8-14 14-24 16 20-16 24-48 20-78z" fill="'+SK2+'" opacity=".75"/>'
    + eye(82,106,7,8.5,'#9A7CFF','#5B3FD0') + eye(118,106,7,8.5,'#9A7CFF','#5B3FD0')
    +'<path d="M68 96c6-6 14-8 22-5M132 96c-6-6-14-8-22-5" fill="none" stroke="'+INK+'" stroke-width="3.4" stroke-linecap="round"/>'
    +'<path d="M70 84c8-6 16-6 22-2M130 84c-8-6-16-6-22-2" fill="none" stroke="#6B74AE" stroke-width="3.6" stroke-linecap="round"/>'
    +'<path d="M100 114v9l-3 1" fill="none" stroke="'+SK2+'" stroke-width="2" stroke-linecap="round"/>'
    +'<path d="M93 136q7 3 14 0" fill="none" stroke="#9C3A4F" stroke-width="2.8" stroke-linecap="round"/>'
    +'<path d="M58 100C52 52 70 20 100 20s48 32 42 80c-2-16-8-26-16-34l4-24-20 18-6-24-10 22-16-20 2 22-14-10 6 24c-8 8-12 18-14 36z" fill="#B4BAD8" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'<path d="M78 40c10-8 26-10 40-4" fill="none" stroke="#F4F6FF" stroke-width="3.5" stroke-linecap="round"/>'
    +'<path d="M134 86c4 14 6 28 2 44 10-14 10-34 4-48z" fill="#B4BAD8" stroke="'+INK+'" stroke-width="2.5" stroke-linejoin="round"/>'
    +'<g transform="translate(70 62)"><path d="M-4-7h8l3 4v9l-3 4h-8l-3-4v-9z" fill="'+TRIM+'" stroke="'+INK+'" stroke-width="2" stroke-linejoin="round"/><path d="M-2-2h4v7h-4z" fill="#FFF3C8"/></g>'
    +'</svg>';
  }

  function pulse(mood){
    mood=mood||'idle';
    return '<svg viewBox="0 0 120 150" role="img" aria-label="Pulse, a lantern spirit" data-mood="'+mood+'">'
    +'<circle cx="60" cy="84" r="54" fill="#FFD36B" opacity=".14"/><circle cx="60" cy="84" r="38" fill="#FFD36B" opacity=".16"/>'
    +'<path d="M44 36C44 10 76 10 76 36" fill="none" stroke="#B8872A" stroke-width="5" stroke-linecap="round"/>'
    +'<path d="M36 40h48l-7 12H43z" fill="#B8872A" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'<path d="M42 52h36l10 14v34l-10 14H42L32 100V66z" fill="'+GOLD+'" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'<path d="M46 58h14l-8 50-14-8V68z" fill="#FFF3C8" opacity=".7"/>'
    +'<path d="M74 66l12 12v22l-8 10z" fill="#E8A92E" opacity=".6"/>'
    +'<path d="M42 114h36l6 10H36z" fill="#B8872A" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'<g data-m="idle oops"><ellipse cx="50" cy="86" rx="5.5" ry="7.5" fill="'+INK+'"/><ellipse cx="70" cy="86" rx="5.5" ry="7.5" fill="'+INK+'"/><circle cx="52" cy="83" r="2" fill="#fff"/><circle cx="72" cy="83" r="2" fill="#fff"/></g>'
    +'<g data-m="happy" fill="none" stroke="'+INK+'" stroke-width="3.2" stroke-linecap="round"><path d="M44 88q6-10 12 0"/><path d="M64 88q6-10 12 0"/></g>'
    +'<g data-m="oops" fill="none" stroke="'+INK+'" stroke-width="2.8" stroke-linecap="round"><path d="M43 76l14-4"/><path d="M77 76l-14-4"/></g>'
    +'<path data-m="idle" d="M54 100q6 5 12 0" fill="none" stroke="'+INK+'" stroke-width="2.8" stroke-linecap="round"/>'
    +'<g data-m="happy"><path d="M52 98q8 14 16 0z" fill="'+INK+'"/><ellipse cx="60" cy="104" rx="4" ry="2.4" fill="#FF6FA3"/></g>'
    +'<ellipse data-m="oops" cx="60" cy="102" rx="4" ry="5" fill="'+INK+'"/>'
    +'<ellipse cx="42" cy="98" rx="5" ry="3" fill="#FF6FA3" opacity=".45"/><ellipse cx="78" cy="98" rx="5" ry="3" fill="#FF6FA3" opacity=".45"/>'
    +'<g data-m="happy" fill="#fff" stroke="'+INK+'" stroke-width="1.4" stroke-linejoin="round"><path d="M100 30l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/><path d="M14 56l1.6 4.6 4.6 1.6-4.6 1.6L14 68l-1.6-4.6L8 61.8l4.4-1.6z"/></g>'
    +'</svg>';
  }

  function npc(color){
    color=color||'#9AA3D6';
    return '<svg viewBox="0 0 200 240" role="img" aria-label="Wanderer">'
    +'<path d="M20 240C22 190 52 156 100 156s78 34 80 84z" fill="#1A1F55" stroke="'+INK+'" stroke-width="3"/>'
    +'<path d="M20 240C22 190 52 156 100 156 76 180 62 208 58 240z" fill="#101441"/>'
    +'<path d="M52 82C52 40 74 18 100 18s48 22 48 64v40c0 18-14 30-48 30S52 140 52 122z" fill="#1F2562" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'<path d="M70 92C70 74 82 66 100 66s30 8 30 26v28c0 14-12 22-30 22s-30-8-30-22z" fill="#0B0E2E"/>'
    +'<ellipse cx="86" cy="104" rx="5" ry="7" fill="'+color+'"/><ellipse cx="114" cy="104" rx="5" ry="7" fill="'+color+'"/>'
    +'<circle cx="87.5" cy="101" r="1.8" fill="#fff"/><circle cx="115.5" cy="101" r="1.8" fill="#fff"/>'
    +'<path d="M56 150c30 22 58 22 88 0l6 22c-34 26-66 26-100 0z" fill="'+color+'" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/>'
    +'</svg>';
  }

  return {
    hero:function(g){ return g==='m'?heroM():heroF(); },
    pulse:pulse,
    npc:npc
  };
})();
