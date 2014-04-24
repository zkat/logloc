var old = {};

module.exports = {
	install: install,
	uninstall: uninstall,
	methods: ["log", "info", "warn", "error"]
};

install();

function install() {
	module.exports.methods.forEach(function(m) {
		old[m] = console[m];
		console[m] = function() {
			var loc;
			try {
				throw new Error();
			} catch (e) {
				var stack = e.stack.split("\n");
				loc = (stack[2]||stack[1]).trim();
			}
			old[m].apply(this, [].slice.call(arguments).concat("("+loc+")"));
		};
	});
}

function uninstall() {
	for (var m in old) {
		if (old.hasOwnProperty(m)) {
			console[m] = old[m];
		}
	}
}
