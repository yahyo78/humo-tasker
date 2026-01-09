import { baseApi } from './baseApi'

export const crudApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getTasks:builder.query({
            query:()=>`tasker/tasks`,
            providesTags:["getTasks"]
        }),
        creatTask:builder.mutation({    
            query:(task)=>({
                url:`tasker/tasks`,
                method:"POST",
                body:task
            }) ,
            invalidatesTags:["getTasks"]
        }),
        changeTaskStatus:builder.mutation({
            query:(taskId)=>({
                url:`tasker/tasks/${taskId}`,
                method:"PUT",
                body:{status:true}
            }),
            invalidatesTags:["getTasks"]
        })
    })
})

export const {useGetTasksQuery,useCreatTaskMutation,useChangeTaskStatusMutation} = crudApi  