document.addEventListener("click", function click(){
    console.log("clicked");
    // alert("hello");
    let conf= confirm("Are you sure?");
    console.log(conf);

    let hello = (val)=>{
        console.log("hello"+ val);
    }

    

} )