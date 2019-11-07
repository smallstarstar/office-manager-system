const timeFormat = {
    // 获取当前的时间格式
    getCurrentTime() {
        const time = new Date();
        const yy = time.getFullYear();
        const mon = time.getMonth() + 1;
        const day = time.getDate();
        const hour = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        // yy-mm-dd
        const mm = mon < 10 ? '0' + mon : mon;
        const dd = day < 10 ? '0' + day : day;
        // hh-mm-ss
        const HH = hour < 10 ? '0' + hour : hour;
        const MM = min < 10 ? '0' + min : min;
        const SS = sec < 10 ? '0' + sec : sec;
        const yearTime = yy + '-' + mm + '-' + dd;
        const dayTime = HH + ':' + MM + ':' + SS;
        return yearTime + ' ' + dayTime;
    }
}

export default timeFormat;