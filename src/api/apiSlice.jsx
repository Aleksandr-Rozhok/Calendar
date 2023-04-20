import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Calendar'],
    endpoints: builder => ({
        getWeekdays: builder.query({
            query: () => '/week',
            providesTags: ['Calendar']
        }),
        getMonth: builder.query({
            query: id => `/months/${id}`,
            providesTags: ['Calendar']
        }),
        getHoursPointers: builder.query({
            query: () => '/hoursPointers',
            providesTags: ['Calendar']
        }),
        // createHero: builder.mutation({
        //     query: hero => ({
        //         url: '/heroes',
        //         method: 'POST',
        //         body: hero
        //     }),
        //     invalidatesTags: ['Heroes']
        // }),
        // deleteHero: builder.mutation({
        //     query: id => ({
        //         url: `/heroes/${id}`,
        //         method: 'DELETE'
        //     }),
        //     invalidatesTags: ['Heroes']
        // })
    })
});

export const {useGetWeekdaysQuery, useGetMonthQuery, useGetHoursPointersQuery} = apiSlice;