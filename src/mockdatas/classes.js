import maleAvatar from '../asset/maleAvatar.png'
import femaleAvatar from '../asset/femaleAvatar.png'

const classes = [
    {
        id: 1,
        name: 'Logic Support',
        type: 'Personal',
        teacher: {
            id: 3,
            avatar: femaleAvatar,
            name: 'Mrs Nga',
            userType: 'Employee',
            status: 'Active',
            gender: 'Female',
            phoneNumber: '0954781154'
        },
        student: {
            id: 1,
            nickName: 'Hary',
            age: '3 years 2 months',
            user: {
                id: 1,
                avatar: maleAvatar,
                name: 'Nguyen Van A',
                userType: 'Student',
                status: 'Active',
                gender: 'Male',
                phoneNumber: '0954781154'
            }
        }
    },
    {
        id: 2,
        name: 'Activity Support',
        type: 'Personal',
        teacher: {
            id: 4,
            avatar: maleAvatar,
            name: 'Mr Duc',
            userType: 'Employee',
            status: 'Active',
            gender: 'Male',
            phoneNumber: '0954781154'
        },
        student: {
            id: 1,
            nickName: 'Hary',
            age: '3 years 2 months',
            user: {
                id: 1,
                avatar: maleAvatar,
                name: 'Nguyen Van A',
                userType: 'Student',
                status: 'Active',
                gender: 'Male',
                phoneNumber: '0954781154'
            }
        }
    },
] 

export default classes;