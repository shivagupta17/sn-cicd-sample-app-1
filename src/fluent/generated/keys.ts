import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'aiux-color-swatch|cicd-sample-1': {
                        table: 'sys_aix_color_swatch'
                        id: '6605281317628df61a37c90559ac6867'
                    }
                    'aiux-experience-page-rel|x-snc-sample1-home-page': {
                        table: 'sys_aix_experience_page_rel'
                        id: 'a4275e187c4aeda0c03cdaec5a8ae6c2'
                    }
                    'aiux-experience-page-rel|x-snc-sample1-incidents-page': {
                        table: 'sys_aix_experience_page_rel'
                        id: 'e76c4f41795e4887ec65a1b300ed5acf'
                    }
                    'aiux-experience-prop|appHeadCss': {
                        table: 'sys_aix_experience_properties'
                        id: 'febc66766ba69e85445aa353ba7161b5'
                    }
                    'aiux-experience-prop|appTailwindCss': {
                        table: 'sys_aix_experience_properties'
                        id: '354142ab80e6e452d51bc304fad532a1'
                    }
                    'aiux-experience|cicd-sample-1': {
                        table: 'sys_aix_experience'
                        id: '9b9c7f7bd9fbbfaf7c0f36b72d519e31'
                    }
                    'aiux-layout-widget|lifecycle': {
                        table: 'sys_aix_widget'
                        id: '09cdd5c0767e03124ff268a8bb6fd7d4'
                    }
                    'aiux-page-widget|x-snc-sample1-home-page': {
                        table: 'sys_aix_widget'
                        id: 'eaf51a6b64c8e8e3254562ca41da7c7f'
                    }
                    'aiux-page-widget|x-snc-sample1-incidents-page': {
                        table: 'sys_aix_widget'
                        id: 'b32b8d9fefc0c4900aa6cbdaa5f3b98f'
                    }
                    'aiux-page|x-snc-sample1-home-page': {
                        table: 'sys_aix_page'
                        id: 'e39de7d916928e1fd89339f60b0f9df9'
                    }
                    'aiux-page|x-snc-sample1-incidents-page': {
                        table: 'sys_aix_page'
                        id: '4b8efb3c73105a59bc1bd7b179d015e5'
                    }
                    'aiux-project|x_snc_sample1': {
                        table: 'sys_aix_project'
                        id: 'e6ea5b30429f1896d07756d564e4802c'
                    }
                    'aiux-theme|cicd-sample-1': {
                        table: 'sys_aix_theme'
                        id: '4cc7f03a1fd3181a11022ddfc9d71730'
                    }
                    'aiux-widget|aiux-hello-world': {
                        table: 'sys_aix_widget'
                        id: '8131beaba64ad7d48f9a11898bd8d3e4'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '4975cd17cc1b49c4ae5bc4572eb0908f'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '149d1d27cf9142e58a9754497c0c6417'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '0595c6a2d9364f8295c28a536bd7d81e'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1838a484fecb4500a3957e5302fc441f'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '19b371dc56404285a89f1113e7e90d14'
                        key: {
                            sys_ui_section: {
                                id: 'aface628d9a9401590d58d883c68b00e'
                                key: {
                                    name: 'x_snc_sample1_my_todo'
                                    caption: 'My ToDo'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c787797764c4abaac4021ed3dc6a980'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '21bbc2eeaa8f4ffe97171d7adc8b07fd'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'priority'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '28f7d69dc7974351a1cc5bc49ab1a3c5'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'state'
                            value: 'pending'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '29ccb12e492e4d4a96886cf2f4840a8b'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '306035b667ad4aadba7268e62e86fcf6'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'state'
                            value: 'cancelled'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '439a9f4b4a534f81a907fec35144952a'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '44fefc3d8bfd4bf2884fa4d5acd6cc9a'
                        key: {
                            name: 'aiux-source e6ea5b30429f1896d07756d564e4802c'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '47899adee0a048448604cfe8741117fc'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b2501d9707049b783d76061b309b5ea'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f3dd5d440434699ba8cbd0d935e2328'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5000c943d05c48abaf8da97c0f2af092'
                        key: {
                            sys_ui_section: {
                                id: 'aface628d9a9401590d58d883c68b00e'
                                key: {
                                    name: 'x_snc_sample1_my_todo'
                                    caption: 'My ToDo'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '64f52ef7eb1b4d5bbb780d1c6d0082c4'
                        key: {
                            sys_ui_section: {
                                id: 'aface628d9a9401590d58d883c68b00e'
                                key: {
                                    name: 'x_snc_sample1_my_todo'
                                    caption: 'My ToDo'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '6a00b618952f4d0284c0f778ec35e470'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '730a163e84e647f796193e457838b9fe'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'state'
                            value: 'in_progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7aa145ed41674b1ab03ccf93aab8b3f6'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7dff882a105d4527a9ec41cca9259cba'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83f3cdc2975c4974be9b5896a28db735'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8484a2f07fd14f10aa9910ab000af3a9'
                        key: {
                            sys_ui_section: {
                                id: 'aface628d9a9401590d58d883c68b00e'
                                key: {
                                    name: 'x_snc_sample1_my_todo'
                                    caption: 'My ToDo'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '890be4e5a2ba4e91998e46a74fab848d'
                        key: {
                            sys_ui_section: {
                                id: 'aface628d9a9401590d58d883c68b00e'
                                key: {
                                    name: 'x_snc_sample1_my_todo'
                                    caption: 'My ToDo'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'due_date'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '89bdf432f00d4742b8f048c51e568333'
                        key: {
                            sys_ui_form: {
                                id: '6a00b618952f4d0284c0f778ec35e470'
                                key: {
                                    name: 'x_snc_sample1_my_todo'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'aface628d9a9401590d58d883c68b00e'
                                key: {
                                    name: 'x_snc_sample1_my_todo'
                                    caption: 'My ToDo'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8b8b74054f154edf884066e12684f2c4'
                        key: {
                            sys_ui_section: {
                                id: 'aface628d9a9401590d58d883c68b00e'
                                key: {
                                    name: 'x_snc_sample1_my_todo'
                                    caption: 'My ToDo'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '916140b91fa54116a952e6abd7f1d4d9'
                        key: {
                            sys_ui_section: {
                                id: 'aface628d9a9401590d58d883c68b00e'
                                key: {
                                    name: 'x_snc_sample1_my_todo'
                                    caption: 'My ToDo'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '91a10d59039f426383b35f845b6181e6'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'state'
                            value: 'complete'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '95ca73a0c9ce4e30b561f2aae86b615c'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'priority'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9ab6650bb08e40c18e4c0e8001ecf2c1'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'aface628d9a9401590d58d883c68b00e'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            caption: 'My ToDo'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b02c11e4c3b5498284d5cb5b05580da1'
                        key: {
                            sys_ui_section: {
                                id: 'aface628d9a9401590d58d883c68b00e'
                                key: {
                                    name: 'x_snc_sample1_my_todo'
                                    caption: 'My ToDo'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b069fbe64d584dea8de54ea20db3ff84'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b0c556419337442b836bc881f06ccd75'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b4d185f0cdb14eb38ab4509e16f883bb'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'priority'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b4f2abd8b68f4dac99093465c165a5ac'
                        key: {
                            sys_ui_section: {
                                id: 'aface628d9a9401590d58d883c68b00e'
                                key: {
                                    name: 'x_snc_sample1_my_todo'
                                    caption: 'My ToDo'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '9'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'c533b07e325e4aefa4b3e2996f6dc952'
                        key: {
                            application_file: 'e6ea5b30429f1896d07756d564e4802c'
                            source_artifact: '44fefc3d8bfd4bf2884fa4d5acd6cc9a'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd25fa84c912648cca0e4d14552166348'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd622b516e5ff4c0990bf3cceff261524'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'dc5e0946a78245bc953abcb48356de28'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e1579e800b9248fab194423ea5aa1878'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e8e3039228a44bccaa4036f20ade4d7e'
                        key: {
                            sys_ui_section: {
                                id: 'aface628d9a9401590d58d883c68b00e'
                                key: {
                                    name: 'x_snc_sample1_my_todo'
                                    caption: 'My ToDo'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f5daa7cea427487b9c3a57a6a394a365'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fbcf154bcbcb4222935847339b624492'
                        key: {
                            name: 'x_snc_sample1_my_todo'
                            element: 'assigned_to'
                        }
                    },
                ]
            }
        }
    }
}
