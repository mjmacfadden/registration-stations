// Shared "How this station works" panel.
// Every station defines window.STATION_GUIDE = { minutes, steps: [...] } and includes
// <div id="station-guide"></div> directly under its header, so directions are always
// in the same place.
(function () {

    function render() {
        var el = document.getElementById('station-guide');
        var g = window.STATION_GUIDE;
        if (!el || !g) return;
        var steps = ['Press <strong>&#9654;</strong> on the timer at the top. You have ' + (g.minutes || 7) + ' minutes.']
            .concat(g.steps)
            .concat(['Write your answers on your <strong>Station Worksheet</strong> handout, then move to your next station.']);
        var lis = steps.map(function (s, i) {
            return '<li class="flex gap-3"><span class="shrink-0 w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-bold flex items-center justify-center">' + (i + 1) + '</span><span class="text-slate-300 text-sm leading-relaxed">' + s + '</span></li>';
        }).join('');
        el.className = 'max-w-4xl mx-auto px-4 pt-6 w-full no-print';
        el.innerHTML =
            '<details open class="tsb-station-guide bg-slate-900 border-2 border-amber-500/40 rounded-2xl shadow-xl">' +
            '<summary class="cursor-pointer select-none px-5 py-3 flex items-center justify-between gap-3">' +
            '<span class="font-extrabold text-amber-400 uppercase tracking-wider text-sm">&#128203; How this station works</span>' +
            '<span class="text-xs text-slate-500">tap to show / hide</span></summary>' +
            '<div class="px-5 pb-5 space-y-4"><ol class="space-y-2">' + lis + '</ol></div>' +
            '</details>';
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
    else render();
})();
