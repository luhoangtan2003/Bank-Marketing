function Validation_Form(){

    var Value = document.querySelector("input[name='Age']").value;
    if(Value === '' || Value < 18){
        alert("Trường Age đang rỗng hoặc giá trị nhỏ hơn 18!!!")
        return false
    }

    var Value = document.querySelector("select[name='Job']").value;
    if(Value === "Chọn giá trị"){
        alert("Job đang rỗng, vui lòng chọn giá trị cho trường!!!")
        return false
    }

    var Value = document.querySelector("select[name='Marital']").value;
    if(Value === "Chọn giá trị"){
        alert("Marital đang rỗng, vui lòng chọn giá trị cho trường!!!")
        return false
    }

    var Value = document.querySelector("select[name='Education']").value;
    if(Value === "Chọn giá trị"){
        alert("Education đang rỗng, vui lòng chọn giá trị cho trường!!!")
        return false
    }

    var Value = document.querySelector("select[name='Default']").value;
    if(Value === "Chọn giá trị"){
        alert("Default đang rỗng, vui lòng chọn giá trị cho trường!!!")
        return false
    }

    var Value = document.querySelector("input[name='Balance']").value;
    if(Value === ''){
        alert("Trường Balance đang rỗng, vui lòng điền giá trị!!!")
        return false
    }

    var Value = document.querySelector("select[name='Housing']").value;
    if(Value === "Chọn giá trị"){
        alert("Housing đang rỗng, vui lòng chọn giá trị cho trường!!!")
        return false
    }

    var Value = document.querySelector("select[name='Loan']").value;
    if(Value === "Chọn giá trị"){
        alert("Loan đang rỗng, vui lòng chọn giá trị cho trường!!!")
        return false
    }

    var Value = document.querySelector("select[name='Contact']").value;
    if(Value === "Chọn giá trị"){
        alert("Contact đang rỗng, vui lòng chọn giá trị cho trường!!!")
        return false
    }

    var Value = document.querySelector("select[name='Day']").value;
    if(Value === "Chọn giá trị"){
        alert("Day đang rỗng, vui lòng chọn giá trị cho trường!!!")
        return false
    }

    var Value = document.querySelector("select[name='Month']").value;
    if(Value === "Chọn giá trị"){
        alert("Month đang rỗng, vui lòng chọn giá trị cho trường!!!")
        return false
    }

    var Value = document.querySelector("input[name='Campaign']").value;
    if(Value === '' || Value < 0){
        alert("Trường Campaign đang rỗng hoặc giá trị nhỏ hơn 0!!!")
        return false
    }

    var Value = document.querySelector("input[name='Pdays']").value;
    if(Value === '' || Value < 0){
        alert("Trường Pdays đang rỗng hoặc giá trị nhỏ hơn 0!!!")
        return false
    }

    var Value = document.querySelector("input[name='Previous']").value;
    if(Value === '' || Value < 0){
        alert("Trường Previous đang rỗng hoặc giá trị nhỏ hơn 0!!!")
        return false
    }

    var Value = document.querySelector("select[name='Poutcome']").value;
    if(Value === "Chọn giá trị"){
        alert("Poutcome đang rỗng, vui lòng chọn giá trị cho trường!!!")
        return false
    }

    return true
}