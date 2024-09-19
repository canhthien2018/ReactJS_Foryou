import Dashboard from '../pages/dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import MyClass from '../pages/myClass';
import MyCalendar from '../pages/myCalendar';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ClassIcon from '@mui/icons-material/Class';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PeopleIcon from '@mui/icons-material/People';
import FaceIcon from '@mui/icons-material/Face';
import AppsIcon from '@mui/icons-material/Apps';
import DashboardIcon from '@mui/icons-material/Dashboard';
import UserList from '../pages/userList';
import StudentList from '../pages/studentList';
import StudentDetail from '../pages/studentDetail';
import ClassList from '../pages/classList';

const HomeItem = {
    path: "/",
    element: <Dashboard />,
    children: [],
    pageTitle: "Dashboard",
    icon: <DashboardIcon fontSize="small" />,
    sideBarTitle: "Dashboard",
    breadcrumb: [
        {
            icon: <DashboardIcon fontSize="small" />,
            label: "Dashboard",
            url: "/"
        }
    ]
}

const MyClassItem = {
    path: "/personal/myclass",
    element: <MyClass />,
    children: [],
    pageTitle: "My Class",
    icon: <SchoolIcon fontSize="small" />,
    sideBarTitle: "My Class",
    breadcrumb: [
        {
            icon: <ContactsIcon fontSize="small" />,
            label: "Personal",
            url: "/"
        },
        {
            icon: '',
            label: "My Class",
            url: "/personal/myclass"
        }
    ]
}

const MyCalendarItem = {
    path: "/personal/mycalendar",
    element: <MyCalendar />,
    children: [],
    pageTitle: "My Calendar",
    icon: <CalendarMonthIcon fontSize="small" />,
    sideBarTitle: "My Calendar",
    breadcrumb: [
        {
            icon: <ContactsIcon fontSize="small" />,
            label: "Personal",
            url: "/"
        },
        {
            icon: '',
            label: "My Calendar",
            url: "/personal/mycalendar"
        }
    ]
}

const PersonalItem = {
    path: "/personal",
    element: '',
    children: [
        MyClassItem,
        MyCalendarItem
    ],
    pageTitle: "Personal",
    icon: <ContactsIcon fontSize="small" />,
    sideBarTitle: "Personal",
    breadcrumb: [
        {
            icon: <ContactsIcon fontSize="small" />,
            label: "Personal",
            url: "/personal"
        }
    ]
}

const UserListItem = {
    path: "/management/users",
    element: <UserList />,
    children: [

    ],
    pageTitle: "Users",
    icon: <PeopleIcon fontSize="small" />,
    sideBarTitle: "Users",
    breadcrumb: [
        {
            icon: <AppRegistrationIcon fontSize="small" />,
            label: "Management",
            url: "/management"
        },
        {
            icon: '',
            label: "Users",
            url: "/management/users"
        }
    ]
}

const MasterdataItem = {
    path: "/management/masterdata",
    element: '',
    children: [

    ],
    pageTitle: "Masterdata",
    icon: <AppsIcon fontSize="small" />,
    sideBarTitle: "Masterdata",
    breadcrumb: [
        {
            icon: <AppRegistrationIcon fontSize="small" />,
            label: "Management",
            url: "/management"
        },
        {
            icon: '',
            label: "Masterdata",
            url: "/management/masterdata"
        }
    ]
}

const RoomListItem = {
    path: "/management/rooms",
    element: '',
    children: [

    ],
    pageTitle: "Rooms",
    icon: <MeetingRoomIcon fontSize="small" />,
    sideBarTitle: "Rooms",
    breadcrumb: [
        {
            icon: <AppRegistrationIcon fontSize="small" />,
            label: "Management",
            url: "/management"
        },
        {
            icon: '',
            label: "Rooms",
            url: "/management/rooms"
        }
    ]
}

const ManagementItem = {
    path: "/management",
    element: '',
    children: [
        UserListItem,
        MasterdataItem,
        RoomListItem
    ],
    pageTitle: "Management",
    icon: <AppRegistrationIcon fontSize="small" />,
    sideBarTitle: "Management",
    breadcrumb: [
        {
            icon: <AppRegistrationIcon fontSize="small" />,
            label: "Management",
            url: "/management"
        }
    ]
}

const StudentDetailItem = {
    path: "/process/students/:id",
    element: <StudentDetail />,
    pageTitle: "Student Profile",
    exact: true,
}

const StudentListItem = {
    path: "/process/students",
    element: <StudentList />,
    children: [

    ],
    pageTitle: "Students",
    icon: <FaceIcon fontSize="small" />,
    sideBarTitle: "Students",
    breadcrumb: [
        {
            icon: <PsychologyIcon fontSize="small" />,
            label: "Process",
            url: "/process"
        },
        {
            icon: '',
            label: "Students",
            url: "/process/students"
        }
    ]
}

const ClassListItem = {
    path: "/process/classes",
    element: <ClassList />,
    children: [

    ],
    pageTitle: "Classes",
    icon: <ClassIcon fontSize="small" />,
    sideBarTitle: "Classes",
    breadcrumb: [
        {
            icon: <PsychologyIcon fontSize="small" />,
            label: "Process",
            url: "/process"
        },
        {
            icon: '',
            label: "Process",
            url: "/process/classes"
        }
    ]
}

const ProcessItem = {
    path: "/process",
    element: '',
    children: [
        StudentListItem,
        ClassListItem
    ],
    pageTitle: "Process",
    icon: <PsychologyIcon fontSize="small" />,
    sideBarTitle: "Process",
    breadcrumb: [
        {
            icon: <PsychologyIcon fontSize="small" />,
            label: "Process",
            url: "/process"
        }
    ]
}






export { HomeItem, PersonalItem, MyClassItem, MyCalendarItem, ManagementItem, MasterdataItem, UserListItem, RoomListItem, ProcessItem, StudentListItem, ClassListItem ,StudentDetailItem}