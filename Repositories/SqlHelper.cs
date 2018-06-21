using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;

namespace JWTandRTAppln.Repositories
{
    public static class SqlHelper
    {
        public enum ExecutionType { Query, Procedure };

        public static int ExecuteNonQuery(string sqlQuery, ExecutionType executionType, List<SqlParameter> sqlParams)
        {
            int rowsAffected = 0;
            string connectionString = null;
            try
            {
                using (SqlConnection sqlConnection = new SqlConnection())
                {
                    using (SqlCommand sqlCmd = sqlConnection.CreateCommand())
                    {
                        sqlCmd.Connection.ConnectionString = connectionString;
                        sqlCmd.CommandText = sqlQuery;

                        if (executionType == ExecutionType.Procedure)
                            sqlCmd.CommandType = CommandType.StoredProcedure;
                        else
                            sqlCmd.CommandType = CommandType.Text;

                        if (sqlParams != null)
                        {
                            foreach (SqlParameter sqlParameter in sqlParams)
                            {
                                sqlCmd.Parameters.Add(sqlParameter);
                            }
                        }

                        sqlCmd.Connection.Open();
                        try
                        {
                            rowsAffected = sqlCmd.ExecuteNonQuery();
                        }
                        catch (SqlException)
                        {
                            throw;
                        }

                        return rowsAffected;
                    }
                }
            }
            catch (DbException)
            {
                throw;
            }
        }
     }
}
