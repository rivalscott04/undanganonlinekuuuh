import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

interface WhatsAppTemplateProps {
  className?: string;
}

export default function WhatsAppTemplate({ className }: WhatsAppTemplateProps) {
  return (
    <Card className={className + " shadow-sm"}>
      <CardHeader className="px-3 py-2 sm:px-6 sm:py-6">
        <CardTitle className="text-base sm:text-xl">Template Pesan WhatsApp</CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Berikut adalah template pesan yang akan dikirim melalui WhatsApp
        </CardDescription>
      </CardHeader>
      <CardContent className="px-3 sm:px-6 pb-2 sm:pb-4">
        <Textarea
          className="min-h-[100px] sm:min-h-[150px] font-mono text-[9px] sm:text-xs"
          readOnly
          value={`Assalamu'alaikum Warahmatullahi Wabarakatuh,

Kepada Yth.
Bapak/Ibu/Saudara/i *[Nama Tamu]*

Dengan penuh kebahagiaan dan tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir dalam acara pernikahan kami yang akan segera dilangsungkan. Kehadiran Anda akan menjadi kebahagiaan tersendiri bagi kami.

Untuk informasi lebih lanjut mengenai acara dan konfirmasi kehadiran, silakan klik link berikut:
[Link Undangan]

Semoga Allah SWT senantiasa memberkahi kita semua dengan kebahagiaan dan kedamaian. Terima kasih atas perhatian dan doanya. Kami berharap bisa berbagi kebahagiaan ini bersama Anda. 😊

Wassalamu'alaikum Warahmatullahi Wabarakatuh,
Kedua Keluarga Yang Berbahagia`}
        />
      </CardContent>
      <CardFooter className="px-3 sm:px-6 py-2 sm:py-4 text-[9px] sm:text-xs text-muted-foreground">
        Template ini akan otomatis mengisi nama tamu dan link undangan saat Anda mengklik tombol salin.
      </CardFooter>
    </Card>
  );
}
