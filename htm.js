export const html = (list) => {
  return `<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <style>
    body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 20px;
        }
        .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 0 auto;
        }
        .title {
            text-align: center;
            font-size: 28px;
            color: #333333;
            margin-bottom: 20px;
            font-weight: 600;
        }
        .notification {
            border-bottom: 1px solid #e0e0e0;
            padding: 15px 0;
        }
        .notification:last-child {
            border-bottom: none;
        }
        .notification a {
            text-decoration: none;
            color: #555555;
            font-weight: 500;
            font-size: 18px;
            display: block;
        }
        .notification a:hover {
            text-decoration: underline;
            color: #007bff;
        }
  </style>
</head>

<body>
  <div class="container">
    ${list
      .map((item) => {
        return `<div class="notification" key=${item.id}>
            <a href="${item.href}">${item.title}</a>
          </div>`;
      })
      .join(",")}
  </div>
</body>

</html>
`;
};
