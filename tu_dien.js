let english = ["hello", 'goodbye', 'computer'];
let vietnamese = ['xin chào', 'tạm biệt', 'máy tính'];
let word = prompt("hãy nhập vào từ cần tra nghĩa");
is_found = true;
for (let i = 0; i <english.length; i++){
    is_found = false;
    if (word === english[i]){
        document.write(vietnamese[i])
    }
}
if (is_found == true){
    document.write("từ này không có trong từ điển")
}