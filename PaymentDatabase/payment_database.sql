CREATE TABLE [dbo].[takk_cause](
    [ID] [int] IDENTITY(1,1) NOT NULL,
    [cause_id] [int] NOT NULL,
    [cause_title] [nvarchar](50) NULL,
    [location] [nvarchar](50) NULL,
    [status] [bit] NULL,
    [start_date] [date] NULL,
    [end_date] [date] NULL,
    [takk_user] [nvarchar](20) NULL,
    [archive_status] [bit] NULL,
 CONSTRAINT [PK_takk_cause] PRIMARY KEY CLUSTERED 
(
    [cause_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[takk_user](
    [ID] [int] IDENTITY(1,1) NOT NULL,
    [user_id] [int] NOT NULL,
    [firstname] [nvarchar](50) NULL,
    [lastname] [nvarchar](50) NULL,
    [adress_line1] [nvarchar](50) NULL,
    [adress_line2] [nvarchar](50) NULL,
    [mobile] [nvarchar](10) NULL,
    [telephone] [nvarchar](10) NULL,
    [email] [nvarchar](50) NULL,
    [profile_image] [varbinary](max) NULL,
    [date_joined] [date] NULL,
    [takk_user] [nvarchar](20) NULL,
    [archive_status] [bit] NULL,
 CONSTRAINT [PK_takk_user] PRIMARY KEY CLUSTERED 
(
    [user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[payment_details](
    [ID] [int] IDENTITY(1,1) NOT NULL,
    [pay_id] [int] NOT NULL,
    [account_number] [int] NULL,
    [sort_code] [int] NOT NULL,
    [donation_value] [decimal](10, 2) NOT NULL,
    [bank_name] [nvarchar](20) NULL,
    [card_name] [nvarchar](50) NULL,
    [start_date] [date] NULL,
    [expiry_date] [date] NOT NULL,
    [credit_debit] [nvarchar](10) NULL,
 CONSTRAINT [PK_payment_details] PRIMARY KEY CLUSTERED 
(
    [ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO