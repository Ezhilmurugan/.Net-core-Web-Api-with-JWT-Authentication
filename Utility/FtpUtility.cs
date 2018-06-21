using System;
using System.IO;
using System.Net;
using System.Net.Cache;
using System.Text;

namespace JWTandRTAppln.Utility
{
    public class FtpUtility
    {
        string ftpServerIP = "XXX.XX.XX.XXX";
        string ftpUserID = "XXXXXXXXX";
        string ftpPassword = "";
        public void Ftp()
        {
            try
            {
                FtpWebRequest request = (FtpWebRequest)WebRequest.Create("ftp://" + "XXX.XX.XX.XXX" + "/" + "Sample.txt");
                request.CachePolicy = new HttpRequestCachePolicy(HttpRequestCacheLevel.CacheIfAvailable);
                request.Method = WebRequestMethods.Ftp.UploadFile;
                request.Credentials = new NetworkCredential("XXXXXXXXX", "XXXXXXXXX");
                request.Proxy = null;
                // Copy the contents of the file to the request stream.  
                StreamReader sourceStream = new StreamReader(@"D:\Area_Code.txt");
                byte[] fileContents = Encoding.UTF8.GetBytes(sourceStream.ReadToEnd());
                sourceStream.Close();
                request.ContentLength = fileContents.Length;
                Stream requestStream = request.GetRequestStream();
                requestStream.Write(fileContents, 0, fileContents.Length);
                requestStream.Close();
                FtpWebResponse response = (FtpWebResponse)request.GetResponse();
                Console.WriteLine("Upload File Complete, status {0}", response.StatusDescription);
                response.Close();
            }

            catch (WebException e)
            {
                Console.WriteLine(e.Message.ToString());
                String status = ((FtpWebResponse)e.Response).StatusDescription;
                Console.WriteLine(status);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message.ToString());
            }
        }
    }
}
