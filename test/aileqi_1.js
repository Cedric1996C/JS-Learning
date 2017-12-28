var arrSa = [Sa0, Sa1, ... , Sam];
var arrEa = [Ea0, Ea1, ... , Eam];
var arrSb = [Sb0, Sb1, ... , Sbn];
var arrEb = [Eb0, Eb1, ... , Ebn];

//判断b的区间开始时刻在a的区间结束时刻之前, 匹配成功返回最早的结束时刻, 匹配不到返回m
function judgeBeginTime(Sb){
    for(var i=0;i<m;i++){
        if(Sb<=arrEa[i])
            return i;
    }
    return m;
}

//判断b的区间的结束时刻在a的区间的开始时刻之前, 匹配成功返回在玩的开始时刻, 匹配不到返回-1
function judgeEndTime(Eb){
    for(var i=am-1;i>=0;i--){
        if(Eb>=arrSa[i])
            return i;
    }
    return -1;
}

//判断同时进行的时间
function computeTime(BeginA, EndA, n){
    if(BeginA > EndA){
        return 0;
    }
    else if(BeginA==EndA){
        var min = arrSa[BeginA]>arrSb[n]?arrSa[BeginA]:arrSb[n];
        var max = arrEa[EndA]<arrEb[n]?arrEa[EndA]:arrEb[n];
        return max-min;
    }
    else {
        var min = arrSa[BeginA]>arrSb[n]?arrSa[BeginA]:arrSb[n];
        var max = arrEa[EndA]<arrEb[n]?arrEa[EndA]:arrEb[n];
        var total = arrEa[BeginA]-min + max-arrEa[EndA];
        for(var i=BeginA+1;i<EndA;i++){
            total += arrEa[i]-arrSa[i];
        }
        return total;
    }

}

//主函数
function findSameTime(){

}