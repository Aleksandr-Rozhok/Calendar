import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Calendar'],
    endpoints: builder => ({
        getEvents: builder.query({
            query: () => '/events',
            providesTags: ['Calendar']
        }),
        createEvent: builder.mutation({
            query: event => ({
                url: '/events',
                method: 'POST',
                body: event
            }),
            invalidatesTags: ['Calendar']
        }),
        deleteEvent: builder.mutation({
            query: id => ({
                url: `/events/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Calendar']
        })
    })
});

export const {useGetEventsQuery, useCreateEventMutation, useDeleteEventMutation} = apiSlice;