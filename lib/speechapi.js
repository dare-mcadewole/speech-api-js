/*
*	@author -> Dare Adewole
*/

var SpeechAPI = function(options) {

	this.options = options || {};

	// Check if Webkit Speech recognition is supported
	if (!('webkitSpeechRecognition' in window)) {
		typeof this.options.notSupported === 'function' ?
		this.options.notSupported() : alert('Speech Recognition is not supported by your browser');
		return;
	}

	navigator.getUserMedia(
		{
			audio: true
		},
		function (localMediaStream) {
			console.log('Permission Granted');
		},
		function (err) {
			console.log(
				err === 'PERMISSION_DENIED' ?
				'You denied Speech API Permission' : err
			);
		}
	);

	// Create Recognition Instance
	var recognition = new webkitSpeechRecognition();

	// Set defaults
	var _defaults = {
		continuous: true,
		interimResults: true,
		lang: 'en-US',
		maxAlternatives: 1,
		onstart: function() {
			console.log('Listening... ');
		},
		onend: function(e) {
			console.log('Stopped Listening', e);
		},
		onresult: function(ev) {
			console.log('Result: ', ev);
			if (typeof ev === 'undefined') {
				recognition.stop();
				return;
			}
			for (var i = ev.resultIndex; i < ev.results.length; ++i) {     
		        ev.results[i].isFinal ?
	            console.log("Final results: " + ev.results[i][0].transcript) :
	            console.log("Interim results: " + ev.results[i][0].transcript);
	    	}
		},
		onspeechstart: function() {
			console.log('Speech Started');
		},
		onspeechend: function() {
			console.log('Speech Ended');
		},
		onnomatch: function(ev) {
			console.log('No match found -> ', ev.results);
		},
		onerror: function(ev) {
			console.error('An Error Occured -> ', ev);
		},
	}

	// Configure Parameters
	recognition.continuous = this.options.continuous || _defaults.continuous;
	recognition.interimResults = this.options.interimResults || _defaults.interimResults;
	recognition.lang = this.options.lang || _defaults.lang;
	recognition.maxAlternatives = this.options.maxAlternatives || _defaults.maxAlternatives;
	recognition.onstart = this.options.onstart || _defaults.onstart;
	recognition.onend = this.options.onend || _defaults.onend;
	recognition.onresult = this.options.onresult || _defaults.onresult;
	recognition.onspeechstart = this.options.onspeechstart || _defaults.onspeechstart;
	recognition.onspeechend = this.options.onspeechend || _defaults.onspeechend;
	recognition.onnomatch = this.options.onnomatch || _defaults.onnomatch;
	recognition.onerror = this.options.onerror || _defaults.onerror;

	Object.freeze(recognition);

	return recognition;
}
