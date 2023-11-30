function expandedForm(num) {
	num = String(num);
	let result = [];
	for (var i = 0; i < num.length; i++) {
		if (num[i] == 0) continue;
		else result.push(num[i] + "0".repeat(num.length -i -1))
	}
	return result.join(" + ")
}