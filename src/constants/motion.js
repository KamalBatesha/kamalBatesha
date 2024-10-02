export let motionLeft=(delay)=>({
hidden:{x:-150,opacity:0},
visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay}
}}
)
export let motionRight=(delay)=>({
    hidden:{x:150,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }}
    )
    export let motionTop=(delay,duration)=>({
        hidden:{y:-100,opacity:0},
        visible:{
            y:0,
            opacity:1,
            transition:{duration:duration,delay:delay}
        }}
        )

    export let upDown=(delay,duration)=>({
        hidden:{y:-10},
        visible:{
            y:[10,-10],
            transition:{duration:duration,
                delay:delay,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse"
            }
        }}
        )