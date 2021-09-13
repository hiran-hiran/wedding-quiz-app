import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  timestamptz: any
  uuid: any
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>
}

/** columns and relationships of "admin_user" */
export type Admin_User = {
  __typename?: 'admin_user'
  created_at: Scalars['timestamptz']
  id: Scalars['String']
  name: Scalars['String']
  /** An array relationship */
  quizzes: Array<Quiz>
  /** An aggregate relationship */
  quizzes_aggregate: Quiz_Aggregate
}

/** columns and relationships of "admin_user" */
export type Admin_UserQuizzesArgs = {
  distinct_on?: Maybe<Array<Quiz_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Quiz_Order_By>>
  where?: Maybe<Quiz_Bool_Exp>
}

/** columns and relationships of "admin_user" */
export type Admin_UserQuizzes_AggregateArgs = {
  distinct_on?: Maybe<Array<Quiz_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Quiz_Order_By>>
  where?: Maybe<Quiz_Bool_Exp>
}

/** aggregated selection of "admin_user" */
export type Admin_User_Aggregate = {
  __typename?: 'admin_user_aggregate'
  aggregate?: Maybe<Admin_User_Aggregate_Fields>
  nodes: Array<Admin_User>
}

/** aggregate fields of "admin_user" */
export type Admin_User_Aggregate_Fields = {
  __typename?: 'admin_user_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Admin_User_Max_Fields>
  min?: Maybe<Admin_User_Min_Fields>
}

/** aggregate fields of "admin_user" */
export type Admin_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Admin_User_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "admin_user". All fields are combined with a logical 'AND'. */
export type Admin_User_Bool_Exp = {
  _and?: Maybe<Array<Admin_User_Bool_Exp>>
  _not?: Maybe<Admin_User_Bool_Exp>
  _or?: Maybe<Array<Admin_User_Bool_Exp>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<String_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  quizzes?: Maybe<Quiz_Bool_Exp>
}

/** unique or primary key constraints on table "admin_user" */
export enum Admin_User_Constraint {
  /** unique or primary key constraint */
  AdminUserPkey = 'admin_user_pkey',
}

/** input type for inserting data into table "admin_user" */
export type Admin_User_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  quizzes?: Maybe<Quiz_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Admin_User_Max_Fields = {
  __typename?: 'admin_user_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Admin_User_Min_Fields = {
  __typename?: 'admin_user_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "admin_user" */
export type Admin_User_Mutation_Response = {
  __typename?: 'admin_user_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Admin_User>
}

/** input type for inserting object relation for remote table "admin_user" */
export type Admin_User_Obj_Rel_Insert_Input = {
  data: Admin_User_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Admin_User_On_Conflict>
}

/** on conflict condition type for table "admin_user" */
export type Admin_User_On_Conflict = {
  constraint: Admin_User_Constraint
  update_columns?: Array<Admin_User_Update_Column>
  where?: Maybe<Admin_User_Bool_Exp>
}

/** Ordering options when selecting data from "admin_user". */
export type Admin_User_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  quizzes_aggregate?: Maybe<Quiz_Aggregate_Order_By>
}

/** primary key columns input for table: admin_user */
export type Admin_User_Pk_Columns_Input = {
  id: Scalars['String']
}

/** select columns of table "admin_user" */
export enum Admin_User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "admin_user" */
export type Admin_User_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** update columns of table "admin_user" */
export enum Admin_User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** columns and relationships of "guest_user" */
export type Guest_User = {
  __typename?: 'guest_user'
  a1: Scalars['String']
  a2: Scalars['String']
  id: Scalars['uuid']
  name: Scalars['String']
  point: Scalars['Int']
  /** An object relationship */
  quiz: Quiz
  quiz_id: Scalars['uuid']
  seat_no?: Maybe<Scalars['String']>
}

/** aggregated selection of "guest_user" */
export type Guest_User_Aggregate = {
  __typename?: 'guest_user_aggregate'
  aggregate?: Maybe<Guest_User_Aggregate_Fields>
  nodes: Array<Guest_User>
}

/** aggregate fields of "guest_user" */
export type Guest_User_Aggregate_Fields = {
  __typename?: 'guest_user_aggregate_fields'
  avg?: Maybe<Guest_User_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Guest_User_Max_Fields>
  min?: Maybe<Guest_User_Min_Fields>
  stddev?: Maybe<Guest_User_Stddev_Fields>
  stddev_pop?: Maybe<Guest_User_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Guest_User_Stddev_Samp_Fields>
  sum?: Maybe<Guest_User_Sum_Fields>
  var_pop?: Maybe<Guest_User_Var_Pop_Fields>
  var_samp?: Maybe<Guest_User_Var_Samp_Fields>
  variance?: Maybe<Guest_User_Variance_Fields>
}

/** aggregate fields of "guest_user" */
export type Guest_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Guest_User_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "guest_user" */
export type Guest_User_Aggregate_Order_By = {
  avg?: Maybe<Guest_User_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Guest_User_Max_Order_By>
  min?: Maybe<Guest_User_Min_Order_By>
  stddev?: Maybe<Guest_User_Stddev_Order_By>
  stddev_pop?: Maybe<Guest_User_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Guest_User_Stddev_Samp_Order_By>
  sum?: Maybe<Guest_User_Sum_Order_By>
  var_pop?: Maybe<Guest_User_Var_Pop_Order_By>
  var_samp?: Maybe<Guest_User_Var_Samp_Order_By>
  variance?: Maybe<Guest_User_Variance_Order_By>
}

/** input type for inserting array relation for remote table "guest_user" */
export type Guest_User_Arr_Rel_Insert_Input = {
  data: Array<Guest_User_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Guest_User_On_Conflict>
}

/** aggregate avg on columns */
export type Guest_User_Avg_Fields = {
  __typename?: 'guest_user_avg_fields'
  point?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "guest_user" */
export type Guest_User_Avg_Order_By = {
  point?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "guest_user". All fields are combined with a logical 'AND'. */
export type Guest_User_Bool_Exp = {
  _and?: Maybe<Array<Guest_User_Bool_Exp>>
  _not?: Maybe<Guest_User_Bool_Exp>
  _or?: Maybe<Array<Guest_User_Bool_Exp>>
  a1?: Maybe<String_Comparison_Exp>
  a2?: Maybe<String_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  point?: Maybe<Int_Comparison_Exp>
  quiz?: Maybe<Quiz_Bool_Exp>
  quiz_id?: Maybe<Uuid_Comparison_Exp>
  seat_no?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "guest_user" */
export enum Guest_User_Constraint {
  /** unique or primary key constraint */
  GuestUserPkey = 'guest_user_pkey',
}

/** input type for incrementing numeric columns in table "guest_user" */
export type Guest_User_Inc_Input = {
  point?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "guest_user" */
export type Guest_User_Insert_Input = {
  a1?: Maybe<Scalars['String']>
  a2?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  point?: Maybe<Scalars['Int']>
  quiz?: Maybe<Quiz_Obj_Rel_Insert_Input>
  quiz_id?: Maybe<Scalars['uuid']>
  seat_no?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Guest_User_Max_Fields = {
  __typename?: 'guest_user_max_fields'
  a1?: Maybe<Scalars['String']>
  a2?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  point?: Maybe<Scalars['Int']>
  quiz_id?: Maybe<Scalars['uuid']>
  seat_no?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "guest_user" */
export type Guest_User_Max_Order_By = {
  a1?: Maybe<Order_By>
  a2?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  point?: Maybe<Order_By>
  quiz_id?: Maybe<Order_By>
  seat_no?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Guest_User_Min_Fields = {
  __typename?: 'guest_user_min_fields'
  a1?: Maybe<Scalars['String']>
  a2?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  point?: Maybe<Scalars['Int']>
  quiz_id?: Maybe<Scalars['uuid']>
  seat_no?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "guest_user" */
export type Guest_User_Min_Order_By = {
  a1?: Maybe<Order_By>
  a2?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  point?: Maybe<Order_By>
  quiz_id?: Maybe<Order_By>
  seat_no?: Maybe<Order_By>
}

/** response of any mutation on the table "guest_user" */
export type Guest_User_Mutation_Response = {
  __typename?: 'guest_user_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Guest_User>
}

/** on conflict condition type for table "guest_user" */
export type Guest_User_On_Conflict = {
  constraint: Guest_User_Constraint
  update_columns?: Array<Guest_User_Update_Column>
  where?: Maybe<Guest_User_Bool_Exp>
}

/** Ordering options when selecting data from "guest_user". */
export type Guest_User_Order_By = {
  a1?: Maybe<Order_By>
  a2?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  point?: Maybe<Order_By>
  quiz?: Maybe<Quiz_Order_By>
  quiz_id?: Maybe<Order_By>
  seat_no?: Maybe<Order_By>
}

/** primary key columns input for table: guest_user */
export type Guest_User_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "guest_user" */
export enum Guest_User_Select_Column {
  /** column name */
  A1 = 'a1',
  /** column name */
  A2 = 'a2',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Point = 'point',
  /** column name */
  QuizId = 'quiz_id',
  /** column name */
  SeatNo = 'seat_no',
}

/** input type for updating data in table "guest_user" */
export type Guest_User_Set_Input = {
  a1?: Maybe<Scalars['String']>
  a2?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  point?: Maybe<Scalars['Int']>
  quiz_id?: Maybe<Scalars['uuid']>
  seat_no?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Guest_User_Stddev_Fields = {
  __typename?: 'guest_user_stddev_fields'
  point?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "guest_user" */
export type Guest_User_Stddev_Order_By = {
  point?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Guest_User_Stddev_Pop_Fields = {
  __typename?: 'guest_user_stddev_pop_fields'
  point?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "guest_user" */
export type Guest_User_Stddev_Pop_Order_By = {
  point?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Guest_User_Stddev_Samp_Fields = {
  __typename?: 'guest_user_stddev_samp_fields'
  point?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "guest_user" */
export type Guest_User_Stddev_Samp_Order_By = {
  point?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Guest_User_Sum_Fields = {
  __typename?: 'guest_user_sum_fields'
  point?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "guest_user" */
export type Guest_User_Sum_Order_By = {
  point?: Maybe<Order_By>
}

/** update columns of table "guest_user" */
export enum Guest_User_Update_Column {
  /** column name */
  A1 = 'a1',
  /** column name */
  A2 = 'a2',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Point = 'point',
  /** column name */
  QuizId = 'quiz_id',
  /** column name */
  SeatNo = 'seat_no',
}

/** aggregate var_pop on columns */
export type Guest_User_Var_Pop_Fields = {
  __typename?: 'guest_user_var_pop_fields'
  point?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "guest_user" */
export type Guest_User_Var_Pop_Order_By = {
  point?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Guest_User_Var_Samp_Fields = {
  __typename?: 'guest_user_var_samp_fields'
  point?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "guest_user" */
export type Guest_User_Var_Samp_Order_By = {
  point?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Guest_User_Variance_Fields = {
  __typename?: 'guest_user_variance_fields'
  point?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "guest_user" */
export type Guest_User_Variance_Order_By = {
  point?: Maybe<Order_By>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "admin_user" */
  delete_admin_user?: Maybe<Admin_User_Mutation_Response>
  /** delete single row from the table: "admin_user" */
  delete_admin_user_by_pk?: Maybe<Admin_User>
  /** delete data from the table: "guest_user" */
  delete_guest_user?: Maybe<Guest_User_Mutation_Response>
  /** delete single row from the table: "guest_user" */
  delete_guest_user_by_pk?: Maybe<Guest_User>
  /** delete data from the table: "quiz" */
  delete_quiz?: Maybe<Quiz_Mutation_Response>
  /** delete single row from the table: "quiz" */
  delete_quiz_by_pk?: Maybe<Quiz>
  /** insert data into the table: "admin_user" */
  insert_admin_user?: Maybe<Admin_User_Mutation_Response>
  /** insert a single row into the table: "admin_user" */
  insert_admin_user_one?: Maybe<Admin_User>
  /** insert data into the table: "guest_user" */
  insert_guest_user?: Maybe<Guest_User_Mutation_Response>
  /** insert a single row into the table: "guest_user" */
  insert_guest_user_one?: Maybe<Guest_User>
  /** insert data into the table: "quiz" */
  insert_quiz?: Maybe<Quiz_Mutation_Response>
  /** insert a single row into the table: "quiz" */
  insert_quiz_one?: Maybe<Quiz>
  /** update data of the table: "admin_user" */
  update_admin_user?: Maybe<Admin_User_Mutation_Response>
  /** update single row of the table: "admin_user" */
  update_admin_user_by_pk?: Maybe<Admin_User>
  /** update data of the table: "guest_user" */
  update_guest_user?: Maybe<Guest_User_Mutation_Response>
  /** update single row of the table: "guest_user" */
  update_guest_user_by_pk?: Maybe<Guest_User>
  /** update data of the table: "quiz" */
  update_quiz?: Maybe<Quiz_Mutation_Response>
  /** update single row of the table: "quiz" */
  update_quiz_by_pk?: Maybe<Quiz>
}

/** mutation root */
export type Mutation_RootDelete_Admin_UserArgs = {
  where: Admin_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Admin_User_By_PkArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Guest_UserArgs = {
  where: Guest_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Guest_User_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_QuizArgs = {
  where: Quiz_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Quiz_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootInsert_Admin_UserArgs = {
  objects: Array<Admin_User_Insert_Input>
  on_conflict?: Maybe<Admin_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Admin_User_OneArgs = {
  object: Admin_User_Insert_Input
  on_conflict?: Maybe<Admin_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Guest_UserArgs = {
  objects: Array<Guest_User_Insert_Input>
  on_conflict?: Maybe<Guest_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Guest_User_OneArgs = {
  object: Guest_User_Insert_Input
  on_conflict?: Maybe<Guest_User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_QuizArgs = {
  objects: Array<Quiz_Insert_Input>
  on_conflict?: Maybe<Quiz_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Quiz_OneArgs = {
  object: Quiz_Insert_Input
  on_conflict?: Maybe<Quiz_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_Admin_UserArgs = {
  _set?: Maybe<Admin_User_Set_Input>
  where: Admin_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Admin_User_By_PkArgs = {
  _set?: Maybe<Admin_User_Set_Input>
  pk_columns: Admin_User_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Guest_UserArgs = {
  _inc?: Maybe<Guest_User_Inc_Input>
  _set?: Maybe<Guest_User_Set_Input>
  where: Guest_User_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Guest_User_By_PkArgs = {
  _inc?: Maybe<Guest_User_Inc_Input>
  _set?: Maybe<Guest_User_Set_Input>
  pk_columns: Guest_User_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_QuizArgs = {
  _set?: Maybe<Quiz_Set_Input>
  where: Quiz_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Quiz_By_PkArgs = {
  _set?: Maybe<Quiz_Set_Input>
  pk_columns: Quiz_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "admin_user" */
  admin_user: Array<Admin_User>
  /** fetch aggregated fields from the table: "admin_user" */
  admin_user_aggregate: Admin_User_Aggregate
  /** fetch data from the table: "admin_user" using primary key columns */
  admin_user_by_pk?: Maybe<Admin_User>
  /** fetch data from the table: "guest_user" */
  guest_user: Array<Guest_User>
  /** fetch aggregated fields from the table: "guest_user" */
  guest_user_aggregate: Guest_User_Aggregate
  /** fetch data from the table: "guest_user" using primary key columns */
  guest_user_by_pk?: Maybe<Guest_User>
  /** fetch data from the table: "quiz" */
  quiz: Array<Quiz>
  /** fetch aggregated fields from the table: "quiz" */
  quiz_aggregate: Quiz_Aggregate
  /** fetch data from the table: "quiz" using primary key columns */
  quiz_by_pk?: Maybe<Quiz>
}

export type Query_RootAdmin_UserArgs = {
  distinct_on?: Maybe<Array<Admin_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Admin_User_Order_By>>
  where?: Maybe<Admin_User_Bool_Exp>
}

export type Query_RootAdmin_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Admin_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Admin_User_Order_By>>
  where?: Maybe<Admin_User_Bool_Exp>
}

export type Query_RootAdmin_User_By_PkArgs = {
  id: Scalars['String']
}

export type Query_RootGuest_UserArgs = {
  distinct_on?: Maybe<Array<Guest_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Guest_User_Order_By>>
  where?: Maybe<Guest_User_Bool_Exp>
}

export type Query_RootGuest_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Guest_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Guest_User_Order_By>>
  where?: Maybe<Guest_User_Bool_Exp>
}

export type Query_RootGuest_User_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootQuizArgs = {
  distinct_on?: Maybe<Array<Quiz_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Quiz_Order_By>>
  where?: Maybe<Quiz_Bool_Exp>
}

export type Query_RootQuiz_AggregateArgs = {
  distinct_on?: Maybe<Array<Quiz_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Quiz_Order_By>>
  where?: Maybe<Quiz_Bool_Exp>
}

export type Query_RootQuiz_By_PkArgs = {
  id: Scalars['uuid']
}

/** columns and relationships of "quiz" */
export type Quiz = {
  __typename?: 'quiz'
  /** An object relationship */
  admin_user: Admin_User
  admin_user_id: Scalars['String']
  created_at: Scalars['timestamptz']
  /** An array relationship */
  guest_users: Array<Guest_User>
  /** An aggregate relationship */
  guest_users_aggregate: Guest_User_Aggregate
  id: Scalars['uuid']
  q1?: Maybe<Scalars['String']>
  q10?: Maybe<Scalars['String']>
  q10a?: Maybe<Scalars['String']>
  q1a?: Maybe<Scalars['String']>
  q2?: Maybe<Scalars['String']>
  q2a?: Maybe<Scalars['String']>
  q3?: Maybe<Scalars['String']>
  q3a?: Maybe<Scalars['String']>
  q4?: Maybe<Scalars['String']>
  q4a?: Maybe<Scalars['String']>
  q5?: Maybe<Scalars['String']>
  q5a?: Maybe<Scalars['String']>
  q6?: Maybe<Scalars['String']>
  q6a?: Maybe<Scalars['String']>
  q7?: Maybe<Scalars['String']>
  q7a?: Maybe<Scalars['String']>
  q8?: Maybe<Scalars['String']>
  q8a?: Maybe<Scalars['String']>
  q9?: Maybe<Scalars['String']>
  q9a?: Maybe<Scalars['String']>
  title: Scalars['String']
}

/** columns and relationships of "quiz" */
export type QuizGuest_UsersArgs = {
  distinct_on?: Maybe<Array<Guest_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Guest_User_Order_By>>
  where?: Maybe<Guest_User_Bool_Exp>
}

/** columns and relationships of "quiz" */
export type QuizGuest_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Guest_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Guest_User_Order_By>>
  where?: Maybe<Guest_User_Bool_Exp>
}

/** aggregated selection of "quiz" */
export type Quiz_Aggregate = {
  __typename?: 'quiz_aggregate'
  aggregate?: Maybe<Quiz_Aggregate_Fields>
  nodes: Array<Quiz>
}

/** aggregate fields of "quiz" */
export type Quiz_Aggregate_Fields = {
  __typename?: 'quiz_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Quiz_Max_Fields>
  min?: Maybe<Quiz_Min_Fields>
}

/** aggregate fields of "quiz" */
export type Quiz_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Quiz_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "quiz" */
export type Quiz_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Quiz_Max_Order_By>
  min?: Maybe<Quiz_Min_Order_By>
}

/** input type for inserting array relation for remote table "quiz" */
export type Quiz_Arr_Rel_Insert_Input = {
  data: Array<Quiz_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Quiz_On_Conflict>
}

/** Boolean expression to filter rows from the table "quiz". All fields are combined with a logical 'AND'. */
export type Quiz_Bool_Exp = {
  _and?: Maybe<Array<Quiz_Bool_Exp>>
  _not?: Maybe<Quiz_Bool_Exp>
  _or?: Maybe<Array<Quiz_Bool_Exp>>
  admin_user?: Maybe<Admin_User_Bool_Exp>
  admin_user_id?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  guest_users?: Maybe<Guest_User_Bool_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  q1?: Maybe<String_Comparison_Exp>
  q10?: Maybe<String_Comparison_Exp>
  q10a?: Maybe<String_Comparison_Exp>
  q1a?: Maybe<String_Comparison_Exp>
  q2?: Maybe<String_Comparison_Exp>
  q2a?: Maybe<String_Comparison_Exp>
  q3?: Maybe<String_Comparison_Exp>
  q3a?: Maybe<String_Comparison_Exp>
  q4?: Maybe<String_Comparison_Exp>
  q4a?: Maybe<String_Comparison_Exp>
  q5?: Maybe<String_Comparison_Exp>
  q5a?: Maybe<String_Comparison_Exp>
  q6?: Maybe<String_Comparison_Exp>
  q6a?: Maybe<String_Comparison_Exp>
  q7?: Maybe<String_Comparison_Exp>
  q7a?: Maybe<String_Comparison_Exp>
  q8?: Maybe<String_Comparison_Exp>
  q8a?: Maybe<String_Comparison_Exp>
  q9?: Maybe<String_Comparison_Exp>
  q9a?: Maybe<String_Comparison_Exp>
  title?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "quiz" */
export enum Quiz_Constraint {
  /** unique or primary key constraint */
  QuizPkey = 'quiz_pkey',
}

/** input type for inserting data into table "quiz" */
export type Quiz_Insert_Input = {
  admin_user?: Maybe<Admin_User_Obj_Rel_Insert_Input>
  admin_user_id?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  guest_users?: Maybe<Guest_User_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['uuid']>
  q1?: Maybe<Scalars['String']>
  q10?: Maybe<Scalars['String']>
  q10a?: Maybe<Scalars['String']>
  q1a?: Maybe<Scalars['String']>
  q2?: Maybe<Scalars['String']>
  q2a?: Maybe<Scalars['String']>
  q3?: Maybe<Scalars['String']>
  q3a?: Maybe<Scalars['String']>
  q4?: Maybe<Scalars['String']>
  q4a?: Maybe<Scalars['String']>
  q5?: Maybe<Scalars['String']>
  q5a?: Maybe<Scalars['String']>
  q6?: Maybe<Scalars['String']>
  q6a?: Maybe<Scalars['String']>
  q7?: Maybe<Scalars['String']>
  q7a?: Maybe<Scalars['String']>
  q8?: Maybe<Scalars['String']>
  q8a?: Maybe<Scalars['String']>
  q9?: Maybe<Scalars['String']>
  q9a?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Quiz_Max_Fields = {
  __typename?: 'quiz_max_fields'
  admin_user_id?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  q1?: Maybe<Scalars['String']>
  q10?: Maybe<Scalars['String']>
  q10a?: Maybe<Scalars['String']>
  q1a?: Maybe<Scalars['String']>
  q2?: Maybe<Scalars['String']>
  q2a?: Maybe<Scalars['String']>
  q3?: Maybe<Scalars['String']>
  q3a?: Maybe<Scalars['String']>
  q4?: Maybe<Scalars['String']>
  q4a?: Maybe<Scalars['String']>
  q5?: Maybe<Scalars['String']>
  q5a?: Maybe<Scalars['String']>
  q6?: Maybe<Scalars['String']>
  q6a?: Maybe<Scalars['String']>
  q7?: Maybe<Scalars['String']>
  q7a?: Maybe<Scalars['String']>
  q8?: Maybe<Scalars['String']>
  q8a?: Maybe<Scalars['String']>
  q9?: Maybe<Scalars['String']>
  q9a?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "quiz" */
export type Quiz_Max_Order_By = {
  admin_user_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  q1?: Maybe<Order_By>
  q10?: Maybe<Order_By>
  q10a?: Maybe<Order_By>
  q1a?: Maybe<Order_By>
  q2?: Maybe<Order_By>
  q2a?: Maybe<Order_By>
  q3?: Maybe<Order_By>
  q3a?: Maybe<Order_By>
  q4?: Maybe<Order_By>
  q4a?: Maybe<Order_By>
  q5?: Maybe<Order_By>
  q5a?: Maybe<Order_By>
  q6?: Maybe<Order_By>
  q6a?: Maybe<Order_By>
  q7?: Maybe<Order_By>
  q7a?: Maybe<Order_By>
  q8?: Maybe<Order_By>
  q8a?: Maybe<Order_By>
  q9?: Maybe<Order_By>
  q9a?: Maybe<Order_By>
  title?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Quiz_Min_Fields = {
  __typename?: 'quiz_min_fields'
  admin_user_id?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  q1?: Maybe<Scalars['String']>
  q10?: Maybe<Scalars['String']>
  q10a?: Maybe<Scalars['String']>
  q1a?: Maybe<Scalars['String']>
  q2?: Maybe<Scalars['String']>
  q2a?: Maybe<Scalars['String']>
  q3?: Maybe<Scalars['String']>
  q3a?: Maybe<Scalars['String']>
  q4?: Maybe<Scalars['String']>
  q4a?: Maybe<Scalars['String']>
  q5?: Maybe<Scalars['String']>
  q5a?: Maybe<Scalars['String']>
  q6?: Maybe<Scalars['String']>
  q6a?: Maybe<Scalars['String']>
  q7?: Maybe<Scalars['String']>
  q7a?: Maybe<Scalars['String']>
  q8?: Maybe<Scalars['String']>
  q8a?: Maybe<Scalars['String']>
  q9?: Maybe<Scalars['String']>
  q9a?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "quiz" */
export type Quiz_Min_Order_By = {
  admin_user_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  q1?: Maybe<Order_By>
  q10?: Maybe<Order_By>
  q10a?: Maybe<Order_By>
  q1a?: Maybe<Order_By>
  q2?: Maybe<Order_By>
  q2a?: Maybe<Order_By>
  q3?: Maybe<Order_By>
  q3a?: Maybe<Order_By>
  q4?: Maybe<Order_By>
  q4a?: Maybe<Order_By>
  q5?: Maybe<Order_By>
  q5a?: Maybe<Order_By>
  q6?: Maybe<Order_By>
  q6a?: Maybe<Order_By>
  q7?: Maybe<Order_By>
  q7a?: Maybe<Order_By>
  q8?: Maybe<Order_By>
  q8a?: Maybe<Order_By>
  q9?: Maybe<Order_By>
  q9a?: Maybe<Order_By>
  title?: Maybe<Order_By>
}

/** response of any mutation on the table "quiz" */
export type Quiz_Mutation_Response = {
  __typename?: 'quiz_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Quiz>
}

/** input type for inserting object relation for remote table "quiz" */
export type Quiz_Obj_Rel_Insert_Input = {
  data: Quiz_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Quiz_On_Conflict>
}

/** on conflict condition type for table "quiz" */
export type Quiz_On_Conflict = {
  constraint: Quiz_Constraint
  update_columns?: Array<Quiz_Update_Column>
  where?: Maybe<Quiz_Bool_Exp>
}

/** Ordering options when selecting data from "quiz". */
export type Quiz_Order_By = {
  admin_user?: Maybe<Admin_User_Order_By>
  admin_user_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  guest_users_aggregate?: Maybe<Guest_User_Aggregate_Order_By>
  id?: Maybe<Order_By>
  q1?: Maybe<Order_By>
  q10?: Maybe<Order_By>
  q10a?: Maybe<Order_By>
  q1a?: Maybe<Order_By>
  q2?: Maybe<Order_By>
  q2a?: Maybe<Order_By>
  q3?: Maybe<Order_By>
  q3a?: Maybe<Order_By>
  q4?: Maybe<Order_By>
  q4a?: Maybe<Order_By>
  q5?: Maybe<Order_By>
  q5a?: Maybe<Order_By>
  q6?: Maybe<Order_By>
  q6a?: Maybe<Order_By>
  q7?: Maybe<Order_By>
  q7a?: Maybe<Order_By>
  q8?: Maybe<Order_By>
  q8a?: Maybe<Order_By>
  q9?: Maybe<Order_By>
  q9a?: Maybe<Order_By>
  title?: Maybe<Order_By>
}

/** primary key columns input for table: quiz */
export type Quiz_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "quiz" */
export enum Quiz_Select_Column {
  /** column name */
  AdminUserId = 'admin_user_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Q1 = 'q1',
  /** column name */
  Q10 = 'q10',
  /** column name */
  Q10a = 'q10a',
  /** column name */
  Q1a = 'q1a',
  /** column name */
  Q2 = 'q2',
  /** column name */
  Q2a = 'q2a',
  /** column name */
  Q3 = 'q3',
  /** column name */
  Q3a = 'q3a',
  /** column name */
  Q4 = 'q4',
  /** column name */
  Q4a = 'q4a',
  /** column name */
  Q5 = 'q5',
  /** column name */
  Q5a = 'q5a',
  /** column name */
  Q6 = 'q6',
  /** column name */
  Q6a = 'q6a',
  /** column name */
  Q7 = 'q7',
  /** column name */
  Q7a = 'q7a',
  /** column name */
  Q8 = 'q8',
  /** column name */
  Q8a = 'q8a',
  /** column name */
  Q9 = 'q9',
  /** column name */
  Q9a = 'q9a',
  /** column name */
  Title = 'title',
}

/** input type for updating data in table "quiz" */
export type Quiz_Set_Input = {
  admin_user_id?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  q1?: Maybe<Scalars['String']>
  q10?: Maybe<Scalars['String']>
  q10a?: Maybe<Scalars['String']>
  q1a?: Maybe<Scalars['String']>
  q2?: Maybe<Scalars['String']>
  q2a?: Maybe<Scalars['String']>
  q3?: Maybe<Scalars['String']>
  q3a?: Maybe<Scalars['String']>
  q4?: Maybe<Scalars['String']>
  q4a?: Maybe<Scalars['String']>
  q5?: Maybe<Scalars['String']>
  q5a?: Maybe<Scalars['String']>
  q6?: Maybe<Scalars['String']>
  q6a?: Maybe<Scalars['String']>
  q7?: Maybe<Scalars['String']>
  q7a?: Maybe<Scalars['String']>
  q8?: Maybe<Scalars['String']>
  q8a?: Maybe<Scalars['String']>
  q9?: Maybe<Scalars['String']>
  q9a?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

/** update columns of table "quiz" */
export enum Quiz_Update_Column {
  /** column name */
  AdminUserId = 'admin_user_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Q1 = 'q1',
  /** column name */
  Q10 = 'q10',
  /** column name */
  Q10a = 'q10a',
  /** column name */
  Q1a = 'q1a',
  /** column name */
  Q2 = 'q2',
  /** column name */
  Q2a = 'q2a',
  /** column name */
  Q3 = 'q3',
  /** column name */
  Q3a = 'q3a',
  /** column name */
  Q4 = 'q4',
  /** column name */
  Q4a = 'q4a',
  /** column name */
  Q5 = 'q5',
  /** column name */
  Q5a = 'q5a',
  /** column name */
  Q6 = 'q6',
  /** column name */
  Q6a = 'q6a',
  /** column name */
  Q7 = 'q7',
  /** column name */
  Q7a = 'q7a',
  /** column name */
  Q8 = 'q8',
  /** column name */
  Q8a = 'q8a',
  /** column name */
  Q9 = 'q9',
  /** column name */
  Q9a = 'q9a',
  /** column name */
  Title = 'title',
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "admin_user" */
  admin_user: Array<Admin_User>
  /** fetch aggregated fields from the table: "admin_user" */
  admin_user_aggregate: Admin_User_Aggregate
  /** fetch data from the table: "admin_user" using primary key columns */
  admin_user_by_pk?: Maybe<Admin_User>
  /** fetch data from the table: "guest_user" */
  guest_user: Array<Guest_User>
  /** fetch aggregated fields from the table: "guest_user" */
  guest_user_aggregate: Guest_User_Aggregate
  /** fetch data from the table: "guest_user" using primary key columns */
  guest_user_by_pk?: Maybe<Guest_User>
  /** fetch data from the table: "quiz" */
  quiz: Array<Quiz>
  /** fetch aggregated fields from the table: "quiz" */
  quiz_aggregate: Quiz_Aggregate
  /** fetch data from the table: "quiz" using primary key columns */
  quiz_by_pk?: Maybe<Quiz>
}

export type Subscription_RootAdmin_UserArgs = {
  distinct_on?: Maybe<Array<Admin_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Admin_User_Order_By>>
  where?: Maybe<Admin_User_Bool_Exp>
}

export type Subscription_RootAdmin_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Admin_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Admin_User_Order_By>>
  where?: Maybe<Admin_User_Bool_Exp>
}

export type Subscription_RootAdmin_User_By_PkArgs = {
  id: Scalars['String']
}

export type Subscription_RootGuest_UserArgs = {
  distinct_on?: Maybe<Array<Guest_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Guest_User_Order_By>>
  where?: Maybe<Guest_User_Bool_Exp>
}

export type Subscription_RootGuest_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Guest_User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Guest_User_Order_By>>
  where?: Maybe<Guest_User_Bool_Exp>
}

export type Subscription_RootGuest_User_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootQuizArgs = {
  distinct_on?: Maybe<Array<Quiz_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Quiz_Order_By>>
  where?: Maybe<Quiz_Bool_Exp>
}

export type Subscription_RootQuiz_AggregateArgs = {
  distinct_on?: Maybe<Array<Quiz_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Quiz_Order_By>>
  where?: Maybe<Quiz_Bool_Exp>
}

export type Subscription_RootQuiz_By_PkArgs = {
  id: Scalars['uuid']
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>
  _gt?: Maybe<Scalars['uuid']>
  _gte?: Maybe<Scalars['uuid']>
  _in?: Maybe<Array<Scalars['uuid']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['uuid']>
  _lte?: Maybe<Scalars['uuid']>
  _neq?: Maybe<Scalars['uuid']>
  _nin?: Maybe<Array<Scalars['uuid']>>
}

export type UpdateQuizMutationVariables = Exact<{
  id: Scalars['uuid']
  q1: Scalars['String']
  q1a: Scalars['String']
  q2: Scalars['String']
  q2a: Scalars['String']
  q3: Scalars['String']
  q3a: Scalars['String']
  q4: Scalars['String']
  q4a: Scalars['String']
  q5: Scalars['String']
  q5a: Scalars['String']
  q6: Scalars['String']
  q6a: Scalars['String']
  q7: Scalars['String']
  q7a: Scalars['String']
  q8: Scalars['String']
  q8a: Scalars['String']
  q9: Scalars['String']
  q9a: Scalars['String']
  q10: Scalars['String']
  q10a: Scalars['String']
}>

export type UpdateQuizMutation = {
  __typename?: 'mutation_root'
  update_quiz_by_pk?: Maybe<{
    __typename?: 'quiz'
    id: any
    q1?: Maybe<string>
    q1a?: Maybe<string>
    q2?: Maybe<string>
    q2a?: Maybe<string>
    q3?: Maybe<string>
    q3a?: Maybe<string>
    q4?: Maybe<string>
    q4a?: Maybe<string>
    q5?: Maybe<string>
    q5a?: Maybe<string>
    q6?: Maybe<string>
    q6a?: Maybe<string>
    q7?: Maybe<string>
    q7a?: Maybe<string>
    q8?: Maybe<string>
    q8a?: Maybe<string>
    q9?: Maybe<string>
    q9a?: Maybe<string>
    q10?: Maybe<string>
    q10a?: Maybe<string>
  }>
}

export type GetAdminUserQueryVariables = Exact<{ [key: string]: never }>

export type GetAdminUserQuery = {
  __typename?: 'query_root'
  admin_user: Array<{
    __typename?: 'admin_user'
    id: string
    name: string
    created_at: any
  }>
}

export type GetQuizQueryVariables = Exact<{ [key: string]: never }>

export type GetQuizQuery = {
  __typename?: 'query_root'
  quiz: Array<{
    __typename?: 'quiz'
    id: any
    created_at: any
    title: string
    q1?: Maybe<string>
    q1a?: Maybe<string>
    q2?: Maybe<string>
    q2a?: Maybe<string>
    q3?: Maybe<string>
    q3a?: Maybe<string>
    q4?: Maybe<string>
    q4a?: Maybe<string>
    q5?: Maybe<string>
    q5a?: Maybe<string>
    q6?: Maybe<string>
    q6a?: Maybe<string>
    q7?: Maybe<string>
    q7a?: Maybe<string>
    q8?: Maybe<string>
    q8a?: Maybe<string>
    q9?: Maybe<string>
    q9a?: Maybe<string>
    q10?: Maybe<string>
    q10a?: Maybe<string>
  }>
}

export type GetQuizByIdQueryVariables = Exact<{
  id: Scalars['uuid']
}>

export type GetQuizByIdQuery = {
  __typename?: 'query_root'
  quiz_by_pk?: Maybe<{
    __typename?: 'quiz'
    id: any
    created_at: any
    title: string
    q1?: Maybe<string>
    q1a?: Maybe<string>
    q2?: Maybe<string>
    q2a?: Maybe<string>
    q3?: Maybe<string>
    q3a?: Maybe<string>
    q4?: Maybe<string>
    q4a?: Maybe<string>
    q5?: Maybe<string>
    q5a?: Maybe<string>
    q6?: Maybe<string>
    q6a?: Maybe<string>
    q7?: Maybe<string>
    q7a?: Maybe<string>
    q8?: Maybe<string>
    q8a?: Maybe<string>
    q9?: Maybe<string>
    q9a?: Maybe<string>
    q10?: Maybe<string>
    q10a?: Maybe<string>
  }>
}

export const UpdateQuizDocument = gql`
  mutation updateQuiz(
    $id: uuid!
    $q1: String!
    $q1a: String!
    $q2: String!
    $q2a: String!
    $q3: String!
    $q3a: String!
    $q4: String!
    $q4a: String!
    $q5: String!
    $q5a: String!
    $q6: String!
    $q6a: String!
    $q7: String!
    $q7a: String!
    $q8: String!
    $q8a: String!
    $q9: String!
    $q9a: String!
    $q10: String!
    $q10a: String!
  ) {
    update_quiz_by_pk(
      pk_columns: { id: $id }
      _set: {
        q1: $q1
        q1a: $q1a
        q2: $q2
        q2a: $q2a
        q3: $q3
        q3a: $q3a
        q4: $q4
        q4a: $q4a
        q5: $q5
        q5a: $q5a
        q6: $q6
        q6a: $q6a
        q7: $q7
        q7a: $q7a
        q8: $q8
        q8a: $q8a
        q9: $q9
        q9a: $q9a
        q10: $q10
        q10a: $q10a
      }
    ) {
      id
      q1
      q1a
      q2
      q2a
      q3
      q3a
      q4
      q4a
      q5
      q5a
      q6
      q6a
      q7
      q7a
      q8
      q8a
      q9
      q9a
      q10
      q10a
    }
  }
`
export type UpdateQuizMutationFn = Apollo.MutationFunction<
  UpdateQuizMutation,
  UpdateQuizMutationVariables
>

/**
 * __useUpdateQuizMutation__
 *
 * To run a mutation, you first call `useUpdateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuizMutation, { data, loading, error }] = useUpdateQuizMutation({
 *   variables: {
 *      id: // value for 'id'
 *      q1: // value for 'q1'
 *      q1a: // value for 'q1a'
 *      q2: // value for 'q2'
 *      q2a: // value for 'q2a'
 *      q3: // value for 'q3'
 *      q3a: // value for 'q3a'
 *      q4: // value for 'q4'
 *      q4a: // value for 'q4a'
 *      q5: // value for 'q5'
 *      q5a: // value for 'q5a'
 *      q6: // value for 'q6'
 *      q6a: // value for 'q6a'
 *      q7: // value for 'q7'
 *      q7a: // value for 'q7a'
 *      q8: // value for 'q8'
 *      q8a: // value for 'q8a'
 *      q9: // value for 'q9'
 *      q9a: // value for 'q9a'
 *      q10: // value for 'q10'
 *      q10a: // value for 'q10a'
 *   },
 * });
 */
export function useUpdateQuizMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateQuizMutation,
    UpdateQuizMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateQuizMutation, UpdateQuizMutationVariables>(
    UpdateQuizDocument,
    options
  )
}
export type UpdateQuizMutationHookResult = ReturnType<
  typeof useUpdateQuizMutation
>
export type UpdateQuizMutationResult = Apollo.MutationResult<UpdateQuizMutation>
export type UpdateQuizMutationOptions = Apollo.BaseMutationOptions<
  UpdateQuizMutation,
  UpdateQuizMutationVariables
>
export const GetAdminUserDocument = gql`
  query getAdminUser {
    admin_user {
      id
      name
      created_at
    }
  }
`

/**
 * __useGetAdminUserQuery__
 *
 * To run a query within a React component, call `useGetAdminUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAdminUserQuery,
    GetAdminUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAdminUserQuery, GetAdminUserQueryVariables>(
    GetAdminUserDocument,
    options
  )
}
export function useGetAdminUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAdminUserQuery,
    GetAdminUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAdminUserQuery, GetAdminUserQueryVariables>(
    GetAdminUserDocument,
    options
  )
}
export type GetAdminUserQueryHookResult = ReturnType<
  typeof useGetAdminUserQuery
>
export type GetAdminUserLazyQueryHookResult = ReturnType<
  typeof useGetAdminUserLazyQuery
>
export type GetAdminUserQueryResult = Apollo.QueryResult<
  GetAdminUserQuery,
  GetAdminUserQueryVariables
>
export const GetQuizDocument = gql`
  query getQuiz {
    quiz {
      id
      created_at
      title
      q1
      q1a
      q2
      q2a
      q3
      q3a
      q4
      q4a
      q5
      q5a
      q6
      q6a
      q7
      q7a
      q8
      q8a
      q9
      q9a
      q10
      q10a
    }
  }
`

/**
 * __useGetQuizQuery__
 *
 * To run a query within a React component, call `useGetQuizQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuizQuery(
  baseOptions?: Apollo.QueryHookOptions<GetQuizQuery, GetQuizQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetQuizQuery, GetQuizQueryVariables>(
    GetQuizDocument,
    options
  )
}
export function useGetQuizLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetQuizQuery, GetQuizQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetQuizQuery, GetQuizQueryVariables>(
    GetQuizDocument,
    options
  )
}
export type GetQuizQueryHookResult = ReturnType<typeof useGetQuizQuery>
export type GetQuizLazyQueryHookResult = ReturnType<typeof useGetQuizLazyQuery>
export type GetQuizQueryResult = Apollo.QueryResult<
  GetQuizQuery,
  GetQuizQueryVariables
>
export const GetQuizByIdDocument = gql`
  query getQuizById($id: uuid!) {
    quiz_by_pk(id: $id) {
      id
      created_at
      title
      q1
      q1a
      q2
      q2a
      q3
      q3a
      q4
      q4a
      q5
      q5a
      q6
      q6a
      q7
      q7a
      q8
      q8a
      q9
      q9a
      q10
      q10a
    }
  }
`

/**
 * __useGetQuizByIdQuery__
 *
 * To run a query within a React component, call `useGetQuizByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetQuizByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetQuizByIdQuery,
    GetQuizByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetQuizByIdQuery, GetQuizByIdQueryVariables>(
    GetQuizByIdDocument,
    options
  )
}
export function useGetQuizByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetQuizByIdQuery,
    GetQuizByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetQuizByIdQuery, GetQuizByIdQueryVariables>(
    GetQuizByIdDocument,
    options
  )
}
export type GetQuizByIdQueryHookResult = ReturnType<typeof useGetQuizByIdQuery>
export type GetQuizByIdLazyQueryHookResult = ReturnType<
  typeof useGetQuizByIdLazyQuery
>
export type GetQuizByIdQueryResult = Apollo.QueryResult<
  GetQuizByIdQuery,
  GetQuizByIdQueryVariables
>
