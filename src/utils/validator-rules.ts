const ValidatorRules = {
    userName: [
        { required: true, message: '用户名不能为空', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '密码不能为空', trigger: 'blur' }
    ]
}

export default ValidatorRules;