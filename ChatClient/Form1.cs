using SimpleTcp;
using System;
using System.Text;
using System.Windows.Forms;

namespace ChatClient
{
    public partial class Form1 : Form
    {
        SimpleTcpClient client;

        public Form1()
        {
            InitializeComponent();
        }

        private void btnConnect_Click(object sender, EventArgs e)
        {
            try
            {
                client.Connect();
                btnSend.Enabled = true;
                btnConnect.Enabled = false;

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "Message", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void btnSend_Click(object sender, EventArgs e)
        {
            if (client.IsConnected)
            {
                if (!string.IsNullOrEmpty(textMessage.Text))
                {
                    client.Send(textMessage.Text);
                    textInfo.Text += $"{textName.Text}: {textMessage.Text}{Environment.NewLine}";
                    textMessage.Text = string.Empty;
                }
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            client = new(textIP.Text);
            client.Events.Connected += Events_Connected;
            client.Events.DataReceived += Events_DataReceived;
            client.Events.Disconnected += Events_Disconnected;
        }

        private void Events_Disconnected(object sender, ClientDisconnectedEventArgs e)
        {
            this.Invoke((MethodInvoker)delegate
            {
                textInfo.Text += $"Server disconnected.{Environment.NewLine}";
            });
        }

        private void Events_DataReceived(object sender, DataReceivedEventArgs e)
        {
            this.Invoke((MethodInvoker)delegate
            {
                textInfo.Text += $"Server: {Encoding.UTF8.GetString(e.Data)}{Environment.NewLine}";
            });
        }

        private void Events_Connected(object sender, ClientConnectedEventArgs e)
        {
            this.Invoke((MethodInvoker)delegate
            {
                textInfo.Text += $"Server connected.{Environment.NewLine}";
            });
        }

        private void btnSet_Click(object sender, EventArgs e)
        {
            this.Invoke((MethodInvoker)delegate
            {
                textName.Text = textName.Text;
            });
        }
    }
}
