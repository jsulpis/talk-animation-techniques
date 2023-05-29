<div class="mermaid">
	<pre>{`%%{
		init: {
			'theme': 'base',
			'themeVariables': {
				'primaryBorderColor': 'black',
				'secondaryBorderColor': 'black',
				'tertiaryBorderColor': 'gray',
				'fontSize': '18px'
			}
		}
	}%%

		flowchart
    subgraph native["APIs natives "]
        direction LR
        trans(Transition CSS) --> anim(Animation CSS)
        anim --> waapi(Web Animation API)
        waapi --> raf(requestAnimationFrame)
    end`}
	</pre>
</div>

<style>
	.mermaid {
		transform: scale(0.9);
	}
</style>
