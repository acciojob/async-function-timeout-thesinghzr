async function form(text, delay) {
    try {
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve(text);
            }, delay)
        });
        document.getElementById("output").innerText = text;
    }
    catch (error) {
        console.error("Error:", error);
    }
}

document.getElementById("btn").addEventListener("click", ()=>{
    let text = document.getElementById("text").value;
    let delay = document.getElementById("delay").value;
    form(text, delay);
});
