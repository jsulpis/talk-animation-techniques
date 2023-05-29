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
    end`}
	</pre>
</div>

<style>
	.mermaid {
		transform: scale(0.7);
	}
</style>
