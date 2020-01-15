var allFolders = document.querySelectorAll(".directory-list li > ul");
allFolders.forEach(function(item){
    var folderAndName = item.parentNode;
    folderAndName.classList.add('folder');
    // var parent = folderAndName.parentNode;
    // parent.removeChild(folderAndName);
    // var a = document.createElement('a');
    // a.appendChild(folderAndName);
    // parent.appendChild(a);
    
    // folderAndName.removeChild(item);
    // folderAndName.append(item);
})