let pol = (Math.random() * 100).toFixed(0);
let cem = convertePolParaCem(pol);


function convertePolParaCem(poles) {
    return (poles * 0.3048).toFixed(1);
}   

alert(pol +" pol = " + convertePolParaCem(pol) + " cm");