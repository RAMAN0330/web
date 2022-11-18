$(function(){
    
    $form = $('form');
    $form.on('submit',function (e){
        e.preventDefault();
        var pet_name = $('#pet_name').val();
        var age = $('#age').val();
        var weight = $('#weight').val(); 
        var selector = $('#selector').val(); 
        var interest = $('#interest').val();

        const pet_1 = {
            cPet_Name : pet_name,
            cAge : age,
            cWeight : weight,
            cSelector : selector,
            cinterest : interest
        };

        var jpet_name = JSON.stringify(pet_1);

        console.log(jpet_name);
        DATA = jpet_name;
    })
})
