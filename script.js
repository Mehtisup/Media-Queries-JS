<script>
function myFunction(z) {
    if (z.matches) {
        document.getElementById("text").style.color = "red";
    } else {
        document.getElementById("text").style.color = "blue";
    }
}
var z = window.matchMedia("(max-width: 500px)");

myFunction(z);

z.addListener(myFunction)
</script>
