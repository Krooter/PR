using System;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Net;
using System.Net.Mail;
using S22.Imap;

namespace MailUserAgent
{
    public partial class LAB4 : Form
    {
        static LAB4 f1;
        public LAB4()
        {
            InitializeComponent();
            f1 = this;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            var message = new MailMessage(txtEmail.Text, txtReceipient.Text);
            message.Subject = txtSubject.Text;
            message.Body = rtxtBody.Text;
            message.IsBodyHtml = true;

            using (SmtpClient mailer = new SmtpClient("smtp.gmail.com", 587))
            {
                mailer.UseDefaultCredentials = false;
                mailer.Credentials = new NetworkCredential(txtEmail.Text, txtPassword.Text);
                mailer.EnableSsl = true;
                mailer.Send(message);
            }

            txtSubject = null;
            txtReceipient = null;
            rtxtBody = null;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            StartReceiving();
        }

        private void StartReceiving()
        {
            Task.Run(() =>
            {
                using (ImapClient client = new ImapClient("imap.gmail.com", 993,
                    txtEmail.Text, txtPassword.Text, AuthMethod.Login, true))
                {
                    if(client.Supports("IDLE") == false)
                    {
                        MessageBox.Show("Server does not support IMAP file!");
                        return;
                    }
                    client.NewMessage += new EventHandler<IdleMessageEventArgs>(OnNewMessage);
                    while (true);
                }
            });
        }

        private void OnNewMessage(object sender, IdleMessageEventArgs e)
        {
            MessageBox.Show("Message received!");
            MailMessage m = e.Client.GetMessage(e.MessageUID, FetchOptions.Normal);
            f1.Invoke((MethodInvoker)delegate
            {
                f1.rxtxReceive.AppendText("From: " + m.From + "\n" +
                                            "Subject:" + m.Subject + "\n"
                                                + "Body:" + m.Body + "\n");
            });
        }
        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox4_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
