module.exports = function(items, options) {
	var out = '';
	if (!!items) {
		out;
		items = items.split('|$|');
		for(var i=0, l=items.length; i<l; i++) {
			console.log(items[i]);
			out +=
			'<tr>'+
				'<td width="3%" align="left">&nbsp;</td>'+
				'<td class="valigntop" width="10"><span class="bullet">&bull;&nbsp;&nbsp;</span></td>'+
				'<td>' + items[i] + '</td>' +
			'</tr>'
		}
	}

	return out;
};
