/* SVG ikonkészlet — currentColor-t használ, így CSS-ből színezhető */
(function (g) {
  var P = {
    spark:'<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
    bolt:'<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
    book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M19 3v18"/>',
    scroll:'<path d="M6 3h11a2 2 0 0 1 2 2v12a2 2 0 0 0 2 2H8a2 2 0 0 1-2-2z"/><path d="M6 3a2 2 0 0 0-2 2v2h4"/>',
    lock:'<rect x="4.5" y="10" width="15" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    lockOpen:'<rect x="4.5" y="10" width="15" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 7.5-1.9"/>',
    check:'<path d="M20 6 9 17l-5-5"/>',
    checkCircle:'<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5 11 15l4.5-5"/>',
    x:'<path d="M18 6 6 18M6 6l12 12"/>',
    xCircle:'<circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/>',
    arrowL:'<path d="M19 12H5M12 19l-7-7 7-7"/>',
    arrowR:'<path d="M5 12h14M12 5l7 7-7 7"/>',
    map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    trophy:'<path d="M7 4h10v4a5 5 0 0 1-10 0z"/><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9 14h6M8 20h8M10 14v3M14 14v3"/>',
    star:'<path d="M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8L6.6 19.6l1-6L3.3 9.4l6-.9z"/>',
    gift:'<rect x="3.5" y="8" width="17" height="12" rx="1.5"/><path d="M3.5 12h17M12 8v12M12 8S9 3 6.5 5 9 8 12 8zM12 8s3-5 5.5-3S15 8 12 8z"/>',
    refresh:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 4v4h-4"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 20v-4h4"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',
    shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
    shieldCheck:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    cube:'<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/>',
    flame:'<path d="M12 3c2 4-3 5-1 9 0 0 3-1 3-4 2 2 3 4 3 6a6 6 0 1 1-12 0c0-3 2-5 4-7 .5 2 2 2 2 0z"/>',
    drop:'<path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11z"/>',
    wave:'<path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/>',
    plug:'<path d="M9 3v5M15 3v5M7 8h10v3a5 5 0 0 1-10 0zM12 16v5"/>',
    ruler:'<rect x="3" y="8" width="18" height="8" rx="1" transform="rotate(0 12 12)"/><path d="M7 8v3M11 8v4M15 8v3M19 8v4"/>',
    layers:'<path d="M12 3 2 8l10 5 10-5z"/><path d="M2 13l10 5 10-5M2 18l10 4 10-4"/>',
    target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',
    wand:'<path d="M5 19 16 8M18 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM7 4l.7 1.4L9 6l-1.3.6L7 8l-.7-1.4L5 6l1.3-.6z"/>',
    hat:'<path d="M12 2 4 9l8 3 8-3z"/><path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4M20 9v5"/>',
    compass:'<circle cx="12" cy="12" r="9"/><path d="M16 8l-2.5 5.5L8 16l2.5-5.5z"/>',
    eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    hand:'<path d="M8 13V5a1.5 1.5 0 0 1 3 0v6M11 11V4a1.5 1.5 0 0 1 3 0v7M14 11V6a1.5 1.5 0 0 1 3 0v8a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-3l-2.5-4a1.6 1.6 0 0 1 2.7-1.6L8 13"/>',
    grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    sparkles:'<path d="M12 4l1.5 4L18 9.5 13.5 11 12 15l-1.5-4L6 9.5 10.5 8zM18 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
    crown:'<path d="M4 8l3 9h10l3-9-5 4-3-6-3 6z"/>',
    medal:'<circle cx="12" cy="15" r="6"/><path d="M9 9 7 3h10l-2 6M12 13l1 2h-2z"/>',
    atom:'<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/>',
    key:'<circle cx="8" cy="8" r="4.5"/><path d="M11 11l8 8M16 16l2-2M19 19l2-2"/>',
    rotate:'<path d="M12 3a9 9 0 1 0 9 9"/><path d="M21 3v6h-6"/>',
    home:'<path d="M3 11 12 3l9 8M5 10v10h14V10"/>'
  };
  g.ICON = function (name, size, extra) {
    var p = P[name] || P.spark;
    var s = size || 24;
    return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" ' +
      'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ' + (extra || '') + '>' + p + '</svg>';
  };
  g.ICON.names = Object.keys(P);
})(window);
