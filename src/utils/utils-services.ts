import { RoleCode } from '@/common/enums/role';
import { TimeSheetKey } from '@/common/enums/time-sheet-key';
const timeSheetKey = require('../components/timeSheet/time-sheet.json');
import { EventStatus } from '@/common/enums/event-status';


const utilServices = {
    getColor(level: number) {
        switch (level) {
            case 1:
                return {
                    background: '#00c300'
                };
            case 2:
                return {
                    background: '#009cff'
                };
            case 3:
                return {
                    background: '#ffd800'
                };
            case 4:
                return {
                    background: '#ff7800'
                };
            case 5:
                return {
                    background: '#ff0000'
                };
            default:
                break;
        }
    },

    getRoleInfo(code: number) {
        switch (code) {
            case RoleCode.ROLE_MANAGER:
                return '管理员';
            case RoleCode.ROLE_CUSTOMER:
                return '普通员工';
            case RoleCode.ROLE_REVIEW:
                return '待审员工';
            default:
                break;
        }
    },

    // // 状态的转化
    statusChange(status: number) {
        switch (status) {
            case EventStatus.NotDisposal:
                console.log('------dddd--')
                return '未处置';
            case EventStatus.Disposal:
                return '处置中';
            case EventStatus.FinishDisposal:
                return '处置完成';
            default:
                break;
        }
    },

    // 时间轴词条的转化
    changeTimeSheetKeys(messageKey: string) {
        if (messageKey === TimeSheetKey.SAVEEVENTMESSAGE) {
            return timeSheetKey.TimeSheet.saveEventInfoMessage;
        }
        if (messageKey === TimeSheetKey.ADDDETAILINFOMESSAGE) {
            return timeSheetKey.TimeSheet.addDetailInfoMessage;
        }
    }
}


export default utilServices;