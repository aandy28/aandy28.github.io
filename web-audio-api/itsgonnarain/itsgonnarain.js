console.log("It's gonna rain");

let audioContext = new AudioContext();

function startLoop(audioBuffer, pan = 0, rate = 1){
	let sourceNode = audioContext.createBufferSource();
	let pannerNode = audioContext.createStereoPanner();

	sourceNode.buffer = audioBuffer;
	sourceNode.loop = true;
	sourceNode.loopStart = 0.0;
	sourceNode.loopEnd = 12.0;
	sourceNode.playbackRate.value = rate;
	pannerNode.pan.value = pan;

	sourceNode.connect(pannerNode);
	sourceNode.connect(audioContext.destination);
	sourceNode.start();
}

fetch('test_1.mp3')
.then(response => response.arrayBuffer())
.then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
.then(audioBuffer => {
	startLoop(audioBuffer, -1);
	startLoop(audioBuffer, 1, 1.002);
	//sourceNode.start(0, 2.98); start from loop start if different from 0.0
})
.catch(e => console.error(e));