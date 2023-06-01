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
    subgraph native["APIs natives"]
        direction LR
        trans(Transition CSS) --> anim(Animation CSS)
        anim --> waapi(Web Animation API)
        waapi --> raf(requestAnimationFrame)
    end
    subgraph frameworks["Frameworks JS"]
        direction TB
        subgraph Vue
            vueTransition[&ltTransition />, &ltTransitionGroup />]
        end
        subgraph Svelte
            transition[transition, motion, animate]
        end
        subgraph React
            shrug("¯\\_ (ツ)_/¯")
        end
        subgraph Angular
            angularanimation("@angular/animations")
				end

    end
    subgraph libs1["Librairies Vanilla JS"]
        direction TB
        motionone(Motion One)
        animejs(Anime.js)
        gsap(GSAP)
        lottie(Lottie)
    end
    subgraph libs2["Librairies liées à un framework"]
        direction TB
        framer(Framer Motion)
        vuemotion("@vueuse/motion")
    end
    subgraph canvas2D["Canvas 2D"]
        direction TB
        canvas2Dapi("Canvas 2D API")
        fabric(Fabric)
        rive(Rive)
    end
    native --> frameworks
    native --> libs1
    frameworks --> libs1
    frameworks --> libs2
    libs1 & libs2 --> a{" "}
    a --> canvas2D`}
	</pre>
</div>
