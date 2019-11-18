const ValidatorRules = {
    userName: [
        { required: true, message: '用户名不能为空', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '密码不能为空', trigger: 'blur' }
    ],
    typeName: [
        { required: true, message: '名称不能为空', trigger: 'blur' }
    ],
    type: [
        { required: true, message: '类型不能为空', trigger: 'blur' }
    ],
    level: [
        { required: true, message: '等级不能为空', trigger: 'blur' }
    ],
    address: [
        { required: true, message: '地址不能为空', trigger: 'blur' }
    ],
    time: [
        { required: true, message: '时间不能为空', trigger: 'blur' }
    ],
    desc: [
        { required: true, message: '描述不能为空', trigger: 'blur' }
    ],
}

export default ValidatorRules;