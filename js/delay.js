var Delay;
Delay = function (min) {
	this.min = min;
};

Delay.prototype.min = 100;
Delay.prototype.initialTime = new Date();

Delay.prototype.ready = function () {
	var time = new Date();
	var dt = time - this.initialTime;
	if (dt > this.min) {
		this.initialTime = time;
		return true;
	}
	return false;
};

