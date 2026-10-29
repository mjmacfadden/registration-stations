// Shared "How this station works" panel + worksheet banner.
// Every station defines window.STATION_GUIDE = { minutes, steps: [...] } and includes
// <div id="station-guide"></div> directly under its header, so directions are always
// in the same place. The hub uses <div id="worksheet-banner"></div>.
(function () {
    var WORKSHEET_URL = 'https://docs.google.com/document/d/1T4CoDCfOeXmaG8HfRkp6mB3KqLw1KKSL0WY6ReUTmXg/edit?usp=drivesdk';
    window.WORKSHEET_URL = WORKSHEET_URL;

    function banner() {
        return '<div class="tsb-worksheet-banner bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-sm">' +
            '<span class="text-slate-200"><strong class="text-amber-400">Station Worksheet:</strong> write all your answers in the Google Doc. First time? Open it, then <strong>File &rarr; Make a copy</strong>.</span>' +
            '<a href="' + WORKSHEET_URL + '" target="_blank" rel="noopener" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg text-xs whitespace-nowrap">Open Worksheet (Google Doc)</a>' +
            '</div>';
    }

    function render() {
        var hub = document.getElementById('worksheet-banner');
        if (hub) hub.innerHTML = banner();

        var el = document.getElementById('station-guide');
        var g = window.STATION_GUIDE;
        if (!el || !g) return;
        var steps = ['Press <strong>&#9654;</strong> on the timer at the top. You have ' + (g.minutes || 7) + ' minutes.']
            .concat(g.steps)
            .concat(['Write your answers in your <strong>Station Worksheet</strong> (Google Doc), then tap <strong>Titan School of Business</strong> at the top to return to the Station Menu.']);
        var lis = steps.map(function (s, i) {
            return '<li class="flex gap-3"><span class="shrink-0 w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-bold flex items-center justify-center">' + (i + 1) + '</span><span class="text-slate-300 text-sm leading-relaxed">' + s + '</span></li>';
        }).join('');
        el.className = 'max-w-4xl mx-auto px-4 pt-6 w-full no-print';
        el.innerHTML =
            '<details open class="tsb-station-guide bg-slate-900 border-2 border-amber-500/40 rounded-2xl shadow-xl">' +
            '<summary class="cursor-pointer select-none px-5 py-3 flex items-center justify-between gap-3">' +
            '<span class="font-extrabold text-amber-400 uppercase tracking-wider text-sm">&#128203; How this station works</span>' +
            '<span class="text-xs text-slate-500">tap to show / hide</span></summary>' +
            '<div class="px-5 pb-5 space-y-4"><ol class="space-y-2">' + lis + '</ol>' + banner() + '</div>' +
            '</details>';
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
    else render();
})();
