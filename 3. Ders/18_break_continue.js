i=0
while(i<10){
    console.log(i)
    if (i == 3)
        break;
    i++;
}

i=0
do{
    i++;
    if(i%2 == 0)
        continue;
    console.log(i)
}while(i<10)