var forTesting = "Иван вчера потерял свою кредитку, ее номер 1178-9087-2384-8787. Поэтому он пошел в банк и описал ситуацию. Там пошли ему навстречу и выдали новую кредитку под номером:  1103-8899-0811-1722";
var result;
function searchCreditNum(str) {
    return str.match(/[0123]{4}[\d-]{15}/);
}

result = searchCreditNum(forTesting);
document.write(result);
