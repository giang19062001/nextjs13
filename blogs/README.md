npx create-next-app@13 _name
Would you like to use TypeScript? .. Yes
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... Yes
√ Would you like to use `src/` directory? ...  Yes
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias (@/*)? ... No 

npm i --save-exact swr@2.2.0

npm run dev


USING APP ROUTER 13

khi cài 1 libary nào đó thì nên xóa .next thư mục rồi start lại

router dựa vào path thư mục
router "/" tên nên là page.tsx thay vì index.tsc


khi dùng các thư viện UI chuyên dành cho Frontend (REACT-BOOSTRAP, MUI ,...) 
hoặc gọi các event phía client (onClick, onChange...) hoặc gọi các hook (useEffect, useState, useSWR) trong 1 page nào đó
thì nên import 'use client' ở đầu trang còn dùng tag html hoặc các router, hàm của nextjs thì ko cần cũng được

muốn tùy biến class css truy cập biến thì file css nên là _name.module.css

nên đặt tên biến môi trường bắt đầu là NEXT_PUBLIC_"name" để phía máy khách có thể hiểu process.env.NEXT_PUBLIC_"name"


swr chỉ thích hợp cho get data còn post, update vẫn nên dùng cách thông thường như axios react

tag metadata chỉ hoạt động trong serve component ( nghĩa là component nào có tag 'use client' là ko hoạt động được)

muốn tạo các giá trị metadata tốt cho SEO cho từng trang thì phải tạo bấy nhiêu file layout.tsx