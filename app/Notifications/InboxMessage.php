<?php

namespace App\Notifications;

use App\Http\Requests\ContactFormRequest;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class InboxMessage extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
     protected $message;
     public function __construct(contactFormRequest $message)
     {
         $this->message = $message;
     }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
     public function toMail($notifiable)
     {
       $reply = $this->message->email;
       $name = $this->message->name;
       $phone = $this->message->phone;
       $company = $this->message->company;
       $email = $this->message->email;
       $msg = $this->message->msg;

         return (new MailMessage)
         ->subject(config('admin.name') . ", you got a new message!")
         ->greeting('You got a new message!')
         ->line('Name: '.$name)
         ->line('Phone Number: '.$phone)
         ->line('E-mail Address: '.$email)
         ->line('Company name: '.$company)
         ->line('Message: '.$msg)
         ->action('Reply to Enquiry', $reply)
         ->salutation(" ")
         ->from($this->message->email, $this->message->name)->line($this->message->message);
     }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
