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
    subgraph native["CSS / JS"]
    end
    subgraph frameworks["Framework JS"]
    end
    subgraph libs1["Librairie Vanilla JS"]
    end
    subgraph libs2["Librairie du framework"]
    end
    subgraph canvas2D["Canvas 2D"]
    end
    subgraph webgl["Canvas WebGL"]
    end

    native --> frameworks
    native --> libs1
    frameworks --> libs1
    frameworks --> libs2
    libs1 & libs2 --> a(" ")
    a --> canvas2D & webgl`}
	</pre>
</div>
