/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
$(function() {

    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
            console.log("error");
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            console.log("success");
            var title= $("select[name='title']").val();
            var name = $("input#firstName").val();
            var family_name= $("input#familyName").val();
            
            var organisation= $("input#organisation").val();
            var position= $("input#position").val();
            var postal_address= $("input#address").val();
            var post_code= $("input#postCode").val();
            var city= $("input#city").val();
            var country= $("input#country").val();
            var phone= $("input#phone").val();
            var mobile= $("input#mobile").val();
            var fax= $("input#fax").val();
            var email = $("input#email").val();
            var dor = $("input#dor").val();
            var dop = $("input#dop").val();
            var gender = $("input[name='gender[]']:checked").val();
            var presTitle = $("input#titleOfPresentation").val();;
            var PrefType = $("input#preferedType").val();;
            var reqEquip = $("input#equipment").val();;
            var mainAuth = $("input#author").val();;
            var mainAuthInst = $("input#authorInst").val();;
            var mainAuthEmail = $("input#authEmail").val();;
            var coAuth = $("input#coAuth").val();;
            var coAuthInst = $("input#coAuthInst").val();;

            var additionalMessage = $("textarea#message").val();
            // console.log(name);
            // console.log(email);
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            // console.log("here");
            // console.log(firstName);
            $.ajax({
                url: "abstract-form.php",
                type: "POST",
                data: {
                    Gender: gender,
                    Title: title,
                    FirstName: name,
                    FamilyName: family_name,
                    Organisation: organisation,
                    Position: position,
                    Postaladdress: postal_address,
                    PostalCode: post_code,
                    City: city,
                    Country: country,
                    Phone: phone,
                    Mobile: mobile,
                    Fax: fax,
                    Email: email,
                    DateOfRegistration:dor,
                    DateOfPayment:dop,
                    PresentationTitle:presTitle,
                    PreferedType:PrefType,
                    EquipmentRequired:reqEquip,
                    MainAuthor:mainAuth,
                    AuthorInst:mainAuthInst,
                    AuthEmail:mainAuthEmail,
                    CoAuth:coAuth,
                    CoAuthInst:coAuthInst,
                    Abstract:additionalMessage
                },
                cache: false,
                success: function(data) {
                    //Success message
                    //clear all fields
                    $('#contactForm').trigger("reset");
                    window.location='abstract-thank-you.html'
                },
                error: function() {
                    //Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + " it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com'>me@example.com</a> ? Sorry for the inconvenience!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                    
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#firstName').focus(function() {
    $('#success').html('');
});
