<script>
	import "../styles/app.css";
	import 'papercss/dist/paper.min.css'
//import components from Spaper
	import { Button } from 'spaper'

	import { Solve } from "../lib/functions/Calculator"

	let expression = ""
	let answer = ""

	function typeToScreen(event){
		expression += event.target.value
	}
	
	function clear(){
		expression = ""
		let text = document.getElementById("screen-text")
		let text2 = document.getElementById("screen-text-answer")
		text.classList.remove("hidden")
		text2.classList.add("hidden")
	}

	async function calculate(){
		let text = document.getElementById("screen-text")
		let text2 = document.getElementById("screen-text-answer")
		text.classList.add("hidden")
		text2.classList.remove("hidden")
		answer = await Solve(expression)
	}

</script>
<slot />
<svelte:head>
	<title>Svelte Calculator</title>
	<meta name="description" content="Svelte Calculator" />
</svelte:head>

<section class="h-screen w-screen place-content-center flex">
	<div class="calculator">
		<div class="screen">
			<p id="screen-text" class="screen-text">{expression? expression : 0}</p>
			<p id="screen-text-answer" class="screen-text hidden">{answer}</p>
		</div>
		<div class="btns">
			<button class="btn num-btn" value="1" on:click={typeToScreen}>1</button>
			<button class="btn num-btn" value="2" on:click={typeToScreen}>2</button>
			<button class="btn num-btn" value="3" on:click={typeToScreen}>3</button>
			<button class="btn op-btn" value="+" on:click={typeToScreen}>+</button>
			<button class="btn num-btn" value="4" on:click={typeToScreen}>4</button>
			<button class="btn num-btn" value="5" on:click={typeToScreen}>5</button>
			<button class="btn num-btn" value="6" on:click={typeToScreen}>6</button>
			<button class="btn op-btn" value="-" on:click={typeToScreen}>-</button>
			<button class="btn num-btn" value="7" on:click={typeToScreen}>7</button>
			<button class="btn num-btn" value="8" on:click={typeToScreen}>8</button>
			<button class="btn num-btn" value="9" on:click={typeToScreen}>9</button>
			<button class="btn op-btn" value="*" on:click={typeToScreen}>x</button>
			<button class="btn num-btn" value="0" on:click={typeToScreen}>0</button>
			<button class="btn num-btn" value="." on:click={typeToScreen}>.</button>
			<button class="btn act-btn" value="clear" on:click={clear}>C</button>
			<button class="btn op-btn" value="/" on:click={typeToScreen}>/</button>
			<button class="btn act-btn equal" value="=" on:click={calculate}>=</button>
		</div>
	</div>
</section>

<style>
	.calculator{
		@apply  w-1/5 bg-slate-500 p-4 rounded-lg border-2 border-slate-800 drop-shadow-2xl h-fit;
	}

	.screen{
		@apply container h-20 bg-slate-200 border-2 border-slate-800 rounded-md text-end relative;
	}
	.screen-text{
		@apply absolute bottom-0 right-2 text-3xl font-bold text-black;
	}

	.btns{
		@apply container mt-6 w-full;
	}

	.btn{
		@apply rounded-full px-5 mb-2 h-16 w-16 font-black text-3xl border-2 border-slate-800;
	}

	.btn:focus, .btn:hover{
		@apply border-black;
	}

	.act-btn{
		@apply bg-red-700 text-white;
	}

	.equal{
		@apply w-full rounded-lg bg-blue-900;
	}

	.op-btn{
		@apply bg-blue-900 text-white;
	}

</style>
