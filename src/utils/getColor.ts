const utilServices = {
    getColor(level: number) {
        switch (level) {
            case 1:
                return '#00c300';
            case 2:
                return '009cff';
            case 3:
                return '#ffd800';
            case 4:
                return 'ff7800';
            case 5:
                return '#ff0000';
            default:
                break;
        }
    }
}


export default utilServices;