import React from 'react';
import Box from '@mui/material/Box';
import StudentClass from './studentClass';

const classMockData = [
  {
    name: 'Logic Support',
    teacherName: 'Mrs Nga',
    description: 'Everything will be easy if you join my class.',
    timeTable: [
      {
        day: 'Monday',
        times: [
          {
            start: '10:00',
            end: '11:00'
          }
        ]
      },
      {
        day: 'Tuesday',
        times: []
      },
      {
        day: 'Wednesday',
        times: [
          {
            start: '10:00',
            end: '11:00'
          }
        ]
      },
      {
        day: 'Thursday',
        times: []
      },
      {
        day: 'Friday',
        times: [
          {
            start: '10:00',
            end: '11:00'
          }
        ]
      },
      {
        day: 'Saturday',
        times: []
      },
      {
        day: 'Sunday',
        times: []
      },
    ],
    exercises: [
      {
        title: 'Logic exercises',
        level: 3.5
      },
      {
        title: 'Read exercises',
        level: 2
      },
      {
        title: 'Write exercises',
        level: 4.5
      },
      {
        title: 'Draw exercises',
        level: 3
      }
    ],
    docs: [
      {
        title: 'HowToWorkWell.docx',
        size: 5.5
      },
      {
        title: 'GoodParentGoodChildren.pdf',
        size: 10.2
      },
      {
        title: 'YourFeeling.pdf',
        size: 4
      },
      {
        title: 'YouAreTheBest.docx',
        size: 3.7
      }
    ]
  },
  {
    name: 'Feeling Control',
    teacherName: 'Mr Duc',
    description: 'Welcome to my feeling class. Everything will be ok.',
    timeTable: [
      {
        day: 'Monday',
        times: []
      },
      {
        day: 'Tuesday',
        times: []
      },
      {
        day: 'Wednesday',
        times: []
      },
      {
        day: 'Thursday',
        times: []
      },
      {
        day: 'Friday',
        times: []
      },
      {
        day: 'Saturday',
        times: [
          {
            start: '16:00',
            end: '19:00'
          }
        ]
      },
      {
        day: 'Sunday',
        times: [
          {
            start: '16:00',
            end: '19:00'
          }
        ]
      },
    ],
    exercises: [
      {
        title: 'Control feeling exercises',
        level: 3.5
      }
    ],
    docs: [
      {
        title: 'HowToControlYourFeeling.docx',
        size: 10.3
      }
    ]
  }
]

function StudentClasses() {
  return (
    <Box sx={{ pl: { xs: 0, xl: 20 }, pr: { xs: 0, xl: 20 } }}>
      {classMockData.map((studentClass, index) => (
      <Box key={index} sx={{mb: 1}}>
        <StudentClass studentClass={studentClass}/>
      </Box>
      ))}

    </Box>
  )
}

export default StudentClasses
